import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '../base-http.service';

@Injectable({
	providedIn: 'root'
})
export class AboutMeService extends BaseHttpService {

	constructor(protected http: HttpClient) {
		super(http);
	}

	public async getAboutData(): Promise<string> {
		return decodeURIComponent(escape(atob((await this.GetFile('about-me'))['content'])));
	}
}