import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-page-not-found',
	templateUrl: './page-not-found.component.html',
	styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {

	constructor(title: Title) {
		title.setTitle('IvánHdzD - 404 página no encontrada!');
	}

	public ngOnInit(): void {
		window.scroll(0, 0);
	}
}