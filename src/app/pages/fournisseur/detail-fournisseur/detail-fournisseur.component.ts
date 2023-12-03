import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-fournisseur',
  templateUrl: './detail-fournisseur.component.html',
  styleUrls: ['./detail-fournisseur.component.scss']
})
export class DetailFournisseurComponent implements OnInit {

  constructor(
    private router:Router
  ) {}

  ngOnInit(): void {
      
  }

  nouveauFournisseur():void {
    this.router.navigate(['nouveaufournisseur'])
  }

}
