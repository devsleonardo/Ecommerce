import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { OfertasComponent } from './oferta/oferta.component';
import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'diversao', component: DiversaoComponent },
  { path: 'ofertas', component: HomeComponent },
  {
    path: 'ofertas/:id',
    component: OfertasComponent,
    children: [
      { path: '', component: ComoUsarComponent },
      { path: 'como-usar', component: ComoUsarComponent },
      { path: 'onde-fica', component: OndeFicaComponent },
    ],
  },
];
