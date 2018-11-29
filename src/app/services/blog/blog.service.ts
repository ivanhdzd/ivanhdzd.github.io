import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BaseHttpService } from '../base-http.service';

@Injectable({
	providedIn: 'root'
})
export class BlogService extends BaseHttpService {

	constructor(protected http: HttpClient) {
		super(http);
	}
}