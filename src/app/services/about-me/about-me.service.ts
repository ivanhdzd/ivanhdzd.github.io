import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '../base-http.service';

@Injectable({
	providedIn: 'root'
})
export class AboutMeService extends BaseHttpService {
	/** About me marketplace content */
	private _aboutMe: string = null;

	constructor(protected http: HttpClient) {
		super(http);
	}

	/**
	 * Get about data from Github page.
	 * @returns (string) about me marketplace content.
	 */
	public async getAboutData(): Promise<string> {
		if (this._aboutMe) return this._aboutMe;
		this._aboutMe = await this.GetFile('about-me');
		return this._aboutMe;
	}
}