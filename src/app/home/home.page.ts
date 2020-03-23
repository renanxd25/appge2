import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  constructor(private navegacaopage: NavController, private teste: InAppBrowser) { }

  openpage() {
    this.navegacaopage.navigateForward('oteatro');
  }
  abrirmapa() {
    this.navegacaopage.navigateForward('mapa');
  }
  bilheteria() {
    this.teste.create(
      'https://teatroarthurazevedo.byinti.com/#/ticket/eventInformation/V0bb8uSUj6cQWe9MDybk',
      '_self'
    );
  }
  facebook() {
    this.teste.create(
      'https://www.facebook.com/teatroarthurazevedooficial',
      '_self'
    );
  }
  twitter() {
    this.teste.create(
      'https://twitter.com/tarthurazevedo',
      '_self'
    );
  }
  youtube() {
    this.teste.create(
      'https://www.youtube.com/channel/UCDq1f20ufxLFjUdz5eqSEtg',
      '_self'
    );
  }
  instagram() {
    this.teste.create(
      'https://www.instagram.com/teatroarthurazevedooficial/',
      '_self'
    );
  }
  noticias() {
    this.navegacaopage.navigateForward('teste');
  }
  agenda() {
    this.teste.create(
      'https://teatroarthurazevedo.byinti.com/#/ticket/eventInformation/V0bb8uSUj6cQWe9MDybk',
      '_self'
    );
  }
   

}
