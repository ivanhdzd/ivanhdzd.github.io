import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { DisqusModule } from 'ngx-disqus';

import { AppRoutingModule } from './modules/app-routing.module';
import { NgrxStoreModule } from './modules/ngrx-store.module';

import { AboutMeService } from './services/about-me/about-me.service';
import { BlogService } from './services/blog/blog.service';

import { EsDatePipe } from './pipes/es-date/es-date.pipe';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';

import { AppComponent } from './app.component';

import { AboutMeComponent } from './pages/about-me/about-me.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/post/post.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

import { ThumbnailPostComponent } from './components/thumbnail-post/thumbnail-post.component';

@NgModule({
	declarations: [
		AppComponent,
		EsDatePipe,
		CapitalizePipe,
		AboutMeComponent,
		BlogComponent,
		PostComponent,
		PageNotFoundComponent,
		ThumbnailPostComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		MarkdownModule.forRoot(),
		DisqusModule.forRoot('ivanhdzd'),
		NgrxStoreModule,
		AppRoutingModule
	],
	providers: [AboutMeService, BlogService],
	bootstrap: [AppComponent]
})
export class AppModule { }