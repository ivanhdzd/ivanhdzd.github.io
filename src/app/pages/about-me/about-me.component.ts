import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { AboutMeService } from '../../services/about-me/about-me.service';

@Component({
	selector: 'app-about-me',
	templateUrl: './about-me.component.html',
	styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
	/** About me string content */
	public aboutMe: string = null;

	constructor(title: Title, private aboutMeService: AboutMeService) {
		title.setTitle('IvánHdzD - Sobre mí');
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