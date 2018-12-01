import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
	selector: 'app-page-not-found',
	templateUrl: './page-not-found.component.html',
	styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
	/** Seconds count */
	public seconds: number = 5;

	constructor(title: Title, private router: Router) {
		title.setTitle('IvánHdzD - 404 página no encontrada!');
	}

	/**
	 * Start seconds decrement to redirect to root route.
	 */
	public ngOnInit(): void {
		window.scroll(0, 0);
		const interval = setInterval(() => {
			if (this.seconds > 0) return --this.seconds;
			clearInterval(interval);
			this.router.navigateByUrl('/');
		}, 1000);
	}
}