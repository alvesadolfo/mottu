import { Component, Input, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { Agent } from '../../types/agent.interface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() profile!: Agent;

  public icons = {
    faHearth: faHeart,
    farHeart: farHeart,
  };

  public isFavorite: boolean = false;

  constructor(private _characterService: CharacterService) {}

  ngOnInit() {
    this.isFavorite = this._characterService.isFavorited(this.profile);
  }

  handleFavorite(item: Agent) {
    if (this.isFavorite) {
      this._characterService.remove(item);
    } else {
      this._characterService.add(item);
    }
    this.isFavorite = !this.isFavorite;
  }
}
