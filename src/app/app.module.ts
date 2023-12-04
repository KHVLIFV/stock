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
import { DetailClientFounisseurComponent } from './composants/detail-client-founisseur/detail-client-founisseur.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { DetailFournisseurComponent } from './pages/fournisseur/detail-fournisseur/detail-fournisseur.component';
import { NouveauClientFournisseurComponent } from './composants/nouveau-client-fournisseur/nouveau-client-fournisseur.component';
import { DetailCommandeClientFournisseurComponent } from './composants/detail-commande-client-fournisseur/detail-commande-client-fournisseur.component';
import { DetailCommandeComponent } from './composants/detail-commande/detail-commande.component';
import { PageCommandeClientFournisseurComponent } from './pages/commandes/page-commande-client-fournisseur/page-commande-client-fournisseur.component';
import { NouvelleCommandeClientFournisseurComponent } from './composants/nouvelle-commande-client-fournisseur/nouvelle-commande-client-fournisseur.component';

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
    DetailMvstkComponent,
    DetailClientFounisseurComponent,
    PageClientComponent,
    DetailFournisseurComponent,
    NouveauClientFournisseurComponent,
    DetailCommandeClientFournisseurComponent,
    DetailCommandeComponent,
    PageCommandeClientFournisseurComponent,
    NouvelleCommandeClientFournisseurComponent
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
