import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashbordComponent } from './pages/page-dashbord/page-dashbord.component';
import { StatistiquesComponent } from './composants/statistiques/statistiques.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvstkComponent } from './pages/mvstk/page-mvstk/page-mvstk.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { DetailFournisseurComponent } from './pages/fournisseur/detail-fournisseur/detail-fournisseur.component';
import { NouveauClientFournisseurComponent } from './composants/nouveau-client-fournisseur/nouveau-client-fournisseur.component';
import { PageCommandeClientFournisseurComponent } from './pages/commandes/page-commande-client-fournisseur/page-commande-client-fournisseur.component';
import { NouvelleCommandeClientFournisseurComponent } from './composants/nouvelle-commande-client-fournisseur/nouvelle-commande-client-fournisseur.component';

const routes: Routes = [
  {
    path:'login',
    component: PageLoginComponent
  },
  {
    path: 'inscription',
    component: PageInscriptionComponent
  },
  {
    path:'',
    component: PageDashbordComponent,
    children: [
      {
        path: 'statistiques',
        component: StatistiquesComponent
      },
      {
        path:'articles',
        component: PageArticleComponent
      },
      {
        path:'nouvelarticle',
        component: NouvelArticleComponent
      },
      {
        path:'mvstk',
        component: PageMvstkComponent
      },
      {
        path:'client',
        component: PageClientComponent
      },
      {
        path:'nouveauclient',
        component: NouveauClientFournisseurComponent
      },
      {
        path:'commandesclient',
        component: PageCommandeClientFournisseurComponent
      },
      {
        path:'nouvellecommandeclient',
        component: NouvelleCommandeClientFournisseurComponent
      },
      {
        path:'fournisseur',
        component: DetailFournisseurComponent
      },
      {
        path:'nouveaufournisseur',
        component: NouveauClientFournisseurComponent
      },
      {
        path:'commandesfournisseur',
        component: PageCommandeClientFournisseurComponent
      },
      {
        path:'nouvellecommandefournisseur',
        component: NouvelleCommandeClientFournisseurComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
