import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from '../pages/about-me/about-me.component';
import { BlogComponent } from '../pages/blog/blog.component';
import {PageNotFoundComponent  } from '../pages/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: 'inicio', pathMatch: 'full' },
	{ path: 'inicio', component: BlogComponent },
	{ path: 'sobre-mi', component: AboutMeComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }