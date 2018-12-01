import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { SeoService } from '../../services/seo/seo.service';
import { AboutMeService } from '../../services/about-me/about-me.service';

@Component({
	selector: 'app-about-me',
	templateUrl: './about-me.component.html',
	styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
	/** About me string content */
	public aboutMe: string = null;

	constructor(title: Title, router: Router, private aboutMeService: AboutMeService, seo: SeoService) {
		title.setTitle('IvánHdzD - Sobre mí');
		seo.SetTags({
			title: 'Sobre mí',
			description: 'Un poco de lo que me apasiona hacer',
			path: router.url
		});
	}

	/**
	 * Get about me string value.
	 */
	public async ngOnInit(): Promise<void> {
		window.scroll(0, 0);
		try {
			this.aboutMe = await this.aboutMeService.getAboutData();
		} catch (err) {
			console.warn('[ERROR] AboutMeComponent.ngOnInit:', err);
		}
	}
}