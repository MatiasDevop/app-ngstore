import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { CounterComponent } from './component/counter/counter.component';
import { BlogComponent } from './component/blog/blog.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {
        path:"",
        component: HomeComponent
    },
    {
        path:"counter",
        component: CounterComponent,
        canActivate: [authGuard]
    },
    {
        path:"blog",
        component: BlogComponent,
        canActivate: [authGuard]
    }
];
