import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHeart, faHome } from '@fortawesome/free-solid-svg-icons';
import { CharacterService } from '../../services/character.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private router: Router,
    private _characterService: CharacterService
  ) {
    this.handleFavorites = this._characterService.favoritesQtty$.subscribe(
      (data) => {
        this.itemsQtty = data;
      }
    );
  }

  public icons = {
    faHome: faHome,
    faHearth: faHeart,
  };

  public screenMenu: string = 'home';
  public itemsQtty: number = 0;
  public handleFavorites: Subscription;

  ngOnInit() {
    this.screenMenu = this.router.url.replace('/', '');
    this._characterService.updateQtty();
  }

  ngOnDestroy() {
    this.handleFavorites.unsubscribe();
  }

  public navToPage(route: string) {
    this.router.navigate([route]);
    this.screenMenu = route;
  }

  public goToExit() {
    this.router.navigate(['/logout']);
  }
}
