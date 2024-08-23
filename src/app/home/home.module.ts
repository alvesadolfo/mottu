import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FavoritesComponent } from './pages/favorites/favorites.component';

@NgModule({
  imports: [FormsModule, HomeRoutingModule, CommonModule, SharedModule],
  declarations: [HomePageComponent, FavoritesComponent],
})
export class HomeModule {}
