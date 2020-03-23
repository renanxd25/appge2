import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-oteatro',
  templateUrl: './oteatro.page.html',
  styleUrls: ['./oteatro.page.scss'],
})
export class OteatroPage implements OnInit {

  constructor(private navegacaopage: NavController, private teste: InAppBrowser) { }
  abrirespaco() {
    this.navegacaopage.navigateForward('espaco');
  }
  abrirfotos() {
    this.navegacaopage.navigateForward('fotos');
  }
  abrirhistoria() {
    this.navegacaopage.navigateForward('historia');
  }
  abrirmplateia() {
    this.navegacaopage.navigateForward('mplateia');
  }
  abrirprojetos() {
    this.teste.create(
      'http://www.cultura.ma.gov.br/taa/index.php?page=noticia_list&t=1',
      '_self'
    );
  }
  abrireditais() {
    this.teste.create(
      'http://www.cultura.ma.gov.br/taa/index.php?page=edital_list',
      '_self'
    );
  }
  abrirrider() {
    this.teste.create(
      'http://www.cultura.ma.gov.br/taa/index.php?page=ridertecnico',
      '_self'
    );
  }
  abripauta() {
    this.teste.create(
      'http://www.cultura.ma.gov.br/taa/index.php?page=pauta',
      '_self'
    );
  }
  abrirnae() {
    this.teste.create(
      'http://www.cultura.ma.gov.br/taa/index.php?page=nae',
      '_self'
    );
  }

  ngOnInit() {
  }

}
