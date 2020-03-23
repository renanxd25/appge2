import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'mapa', loadChildren: './mapa/mapa.module#MapaPageModule' },
  { path: 'oteatro', loadChildren: './oteatro/oteatro.module#OteatroPageModule' },
  { path: 'espaco', loadChildren: './espaco/espaco.module#EspacoPageModule' },
  { path: 'fotos', loadChildren: './fotos/fotos.module#FotosPageModule' },
  { path: 'historia', loadChildren: './historia/historia.module#HistoriaPageModule' },
  { path: 'mplateia', loadChildren: './mplateia/mplateia.module#MplateiaPageModule' },
  { path: 'projetos', loadChildren: './projetos/projetos.module#ProjetosPageModule' },
  { path: 'visitacao', loadChildren: './visitacao/visitacao.module#VisitacaoPageModule' },
  { path: 'contatos', loadChildren: './contatos/contatos.module#ContatosPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
