import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ParentComponent } from './components/parent/parent.component';
import { ParamComponent } from './components/param/param.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"parent",component:ParentComponent},
    {path:"params/:id",component:ParamComponent}
];
