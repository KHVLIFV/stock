import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-commande-client-fournisseur',
  templateUrl: './page-commande-client-fournisseur.component.html',
  styleUrls: ['./page-commande-client-fournisseur.component.scss']
})
export class PageCommandeClientFournisseurComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
      
  }

  nouvelleCommande(): void {
    this.router.navigate(['nouvellecommandeclient'])
  }

}
