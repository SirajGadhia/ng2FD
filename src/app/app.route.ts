import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent }  from './home';
import { AboutComponent }    from './about';

const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent }
];

export const AppRoute = [
    provideRouter(routes)
];