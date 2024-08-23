import { Component, HostListener } from '@angular/core';
import { Agent } from '../../../shared/types/agent.interface';
import {
  Subject,
  Subscription,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';
import { AgentServiceType } from '../../../shared/types/agentService.interface';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CharacterService } from '../../../shared/services/character.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  public inputSearchValue: string = '';
  public placeHolderSearch: string = 'Pesquisar';
  public agentsFiltered: Agent[] = [];
  private search = new Subject<string>();
  private subscription: Subscription = new Subscription();
  private page = 1;
  private pageSize = 8;
  public loading = false;
  public endOfData = false;
  public totalAgents = 0;
  public icons = {
    faSearch: faSearch,
  };

  constructor(private _charsService: CharacterService) {}

  ngOnInit() {
    this.subscription = this.search
      .pipe(debounceTime(400), distinctUntilChanged())
      .subscribe((term) => {
        this.loadChars(term);
      });

    this.loadChars();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSearchText(text: string) {
    this.page = 1;
    this.search.next(text);
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    const clientHeight =
      document.documentElement.clientHeight || window.innerHeight || 0;
    const scrollHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight || 0;

    if (
      scrollPosition + clientHeight >= scrollHeight - 100 &&
      !this.loading &&
      !this.endOfData
    ) {
      this.page++;
      this.loadChars();
    }
  }

  private loadChars(name?: string) {
    this.loading = true;
    this._charsService
      .listAndFilterChars({ page: this.page, limit: this.pageSize, name })
      .subscribe(
        (data: AgentServiceType) => {
          if (this.page === data.info.pages) {
            this.endOfData = true;
          }

          this.totalAgents = data.info.count;

          if (this.page === 1) {
            this.agentsFiltered = data.results;
          } else {
            this.agentsFiltered = this.agentsFiltered.concat(data.results);
          }
          this.loading = false;
        },
        (error: any) => {
          console.error('Erro ao carregar personagens', error);
          if (error.status === 404) {
            this.agentsFiltered = [];
          }
          this.loading = false;
        }
      );
  }
}
