import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxMdModule } from 'ngx-md';

import { AppRoutingModule } from './modules/app-routing.module';
import { NgrxStoreModule } from './modules/ngrx-store.module';

import { AboutMeService } from './services/about-me/about-me.service';
import { BlogService } from './services/blog/blog.service';

import { SanitizeHtmlPipe } from './pipes/sanitize-html/sanitize-html.pipe';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		SanitizeHtmlPipe,
		AboutMeComponent,
		BlogComponent,
		PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		NgxMdModule.forRoot(),
		AppRoutingModule,
		NgrxStoreModule
	],
	providers: [AboutMeService, BlogService],
	bootstrap: [AppComponent]
})
export class AppModule { }