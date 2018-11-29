import { Component, OnInit } from '@angular/core';

import { AboutMeService } from '../../services/about-me/about-me.service';

@Component({
	selector: 'app-about-me',
	templateUrl: './about-me.component.html',
	styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
	public aboutMe: string = null;

	constructor(private aboutMeService: AboutMeService) { }

	public async ngOnInit(): Promise<void> {
		try {
			this.aboutMe = await this.aboutMeService.getAboutData();
		} catch (err) {
			console.warn('[ERROR] AboutMeComponent.ngOnInit:', err);
		}
	}
}