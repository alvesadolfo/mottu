import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { ApiService } from './api.service';
import { AgentServiceType } from '../types/agentService.interface';
import { Agent } from '../types/agent.interface';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private favoritesSubject = new BehaviorSubject<Agent[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  private favoritesQtty = new BehaviorSubject(0);
  favoritesQtty$ = this.favoritesQtty.asObservable();

  constructor(private apiService: ApiService) {
    const initialFavorites = this.loadFavorites();
    this.favoritesSubject.next(initialFavorites);
    this.updateQtty();
  }

  listAndFilterChars(params: {
    page?: number;
    limit?: number;
    name?: string;
  }): Observable<AgentServiceType> {
    const queryParams: { page?: number; limit?: number; name?: string } = {
      page: params.page,
      limit: params.limit,
      ...(params.name ? { name: params.name } : {}),
    };

    return this.apiService.get('character', queryParams).pipe(
      map((response: any) => {
        return response.body as AgentServiceType;
      })
    );
  }

  add(item: Agent): void {
    const currentFavorites = this.favoritesSubject.getValue();
    if (!this.isFavorited(item)) {
      const updatedFavorites = [...currentFavorites, item];
      this.favoritesSubject.next(updatedFavorites);
      this.updateQtty();
    }
  }

  remove(item: Agent): void {
    const currentFavorites = this.favoritesSubject.getValue();
    const updatedFavorites = currentFavorites.filter(
      (fav) => fav.id !== item.id
    );
    this.favoritesSubject.next(updatedFavorites);
    this.updateQtty();
  }

  isFavorited(item: Agent): boolean {
    const currentFavorites = this.favoritesSubject.getValue();
    return currentFavorites.some((fav) => fav.id === item.id);
  }

  updateQtty(): void {
    const currentFavorites = this.favoritesSubject.getValue();
    this.favoritesQtty.next(currentFavorites.length);
  }

  private loadFavorites(): Agent[] {
    return [];
  }
}
