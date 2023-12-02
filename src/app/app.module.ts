import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashbordComponent } from './pages/page-dashbord/page-dashbord.component';
import { MenuComponent } from './composants/menu/menu.component';
import { StatistiquesComponent } from './composants/statistiques/statistiques.component';
import { HearderComponent } from './composants/hearder/hearder.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BoutonActionComponent } from './composants/bouton-action/bouton-action.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvstkComponent } from './pages/mvstk/page-mvstk/page-mvstk.component';
import { DetailMvstkArticleComponent } from './composants/detail-mvstk-article/detail-mvstk-article.component';
import { DetailMvstkComponent } from './composants/detail-mvstk/detail-mvstk.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashbordComponent,
    MenuComponent,
    StatistiquesComponent,
    HearderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BoutonActionComponent,
    NouvelArticleComponent,
    PageMvstkComponent,
    DetailMvstkArticleComponent,
    DetailMvstkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
