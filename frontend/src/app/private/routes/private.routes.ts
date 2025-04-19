import { Routes } from '@angular/router';
import { environment } from '@env/environment';

export const privateRoutes: Routes = [
  {
    path: '',
    title: environment.appName,
    loadComponent: () => import('@private/_layout/private-layout.component'),
    children: [],
  },
  {
    path:'**',
    title:'Redirecting...',
    redirectTo:'',
    pathMatch:'full',
  }
];

export default privateRoutes;
