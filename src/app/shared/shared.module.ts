import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './components/card/card.component';
import { CharacterService } from './services/character.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  declarations: [
    SharedComponent,
    NotFoundPageComponent,
    HeaderComponent,
    InputSearchComponent,
    CardComponent,
  ],
  exports: [
    NotFoundPageComponent,
    HeaderComponent,
    InputSearchComponent,
    CardComponent,
  ],
  providers: [ApiService, CharacterService],
})
export class SharedModule {}
