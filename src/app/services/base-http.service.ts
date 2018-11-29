import { HttpClient } from '@angular/common/http';

export class BaseHttpService {
	protected url: string = 'https://api.github.com/repos/ivanhdzd/ivanhdzd.github.io/contents/docs';

	constructor(protected http: HttpClient) { }

	protected async GetFile(url: string): Promise<any> {
		return this.http.get(`${ this.url }/${ url }/index.md?ref=docs`).toPromise();
	}

	protected async GetFolder(url: string): Promise<any> {
		return this.http.get(`${ this.url }/${ url }?ref=docs`).toPromise();
	}
}