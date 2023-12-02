import { Component, OnInit } from '@angular/core';
import {Menu} from './menu';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  implements OnInit {
  public menuProperties: Array<Menu> =[
    {
      id: '1',
      titre:'Tableau de bord',
      icon:'fa-solid fa-chart-line',
      url: '',
      sousMenu: [
        {
          id:'11',
          titre:'Vue d\'ensemble',
          icon:'fa-solid fa-chart-pie',
          url:''
        },
        {
          id:'12',
          titre:'Satistiques',
          icon:'fa-solid fa-chart-simple',
          url:'/statistiques'
        },
      ]
    },
    {
      id: '2',
      titre:'Articles',
      icon:'fa-solid fa-box',
      url: '',
      sousMenu: [
        {
          id:'21',
          titre:'Articles',
          icon:'fa-solid fa-boxes-stacked',
          url:'/articles'
        },
        {
          id:'22',
          titre:'Mouvement du stock',
          icon:'fa-brands fa-stack-overflow',
          url:'/mvstk'
        }
      ]
    },
    {
      id: '3',
      titre:'Clients',
      icon:'fas fa-users',
      url: '',
      sousMenu: [
        {
          id:'31',
          titre:'Clients',
          icon:'fas fa-users',
          url:''
        },
        {
          id:'32',
          titre:'Commandes client',
          icon:'fas fa-shopping-basket',
          url:''
        }
      ]
    },
    {
      id: '4',
      titre:'Fournisseurs',
      icon:'fas fa-users',
      url: '',
      sousMenu: [
        {
          id:'41',
          titre:'Fournisseurs',
          icon:'fas fa-users',
          url:''
        },
        {
          id:'42',
          titre:'Commandes fournisseurs',
          icon:'fa-solid fa-truck',
          url:''
        }
      ]
    },
    {
      id: '5',
      titre:'parametrages',
      icon:'fas fa-cogs',
      url: '',
      sousMenu: [
        {
          id:'51',
          titre:'Categories',
          icon:'fas fa-tools',
          url:''
        },
        {
          id:'52',
          titre:'Utilisatieurs',
          icon:'fas fa-users-cog',
          url:''
        }
      ]
    }
  ];

  ngOnInit(): void {}

  constructor(
    private router: Router
  ) {}

  navigate(url?:string):void{
    this.router.navigate([url]);
  }

}
