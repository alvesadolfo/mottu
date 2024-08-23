import { Component, OnInit } from '@angular/core';
import { Agent } from '../../../shared/types/agent.interface';
import { CharacterService } from '../../../shared/services/character.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
  public items: Agent[] = [];
  public favorites$: Subscription;

  constructor(
    private _characterService: CharacterService,
    private router: Router
  ) {
    this.favorites$ = this._characterService.favorites$.subscribe(
      (favorites) => {
        this.items = favorites;
      }
    );
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.favorites$.unsubscribe();
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
