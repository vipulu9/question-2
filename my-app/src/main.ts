import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { RouteComponentA } from './app/route-component-a/route-component-a.component';
import { RouteComponentB } from './app/route-component-b/route-component-b.component';
import { AppComponent } from './app/app.component';

const routes: Route[] = [
  { path: 'component-a', component: RouteComponentA },
  { path: 'component-b', component: RouteComponentB },
  { path: '', redirectTo: '/component-a', pathMatch: 'full' }  // Default route
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).catch(err => console.error(err));
