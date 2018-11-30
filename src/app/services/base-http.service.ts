import { HttpClient } from '@angular/common/http';

export class BaseHttpService {
	/** URL to get docs file contents */
	private _url: string = 'https://api.github.com/repos/ivanhdzd/ivanhdzd.github.io/contents/docs';

	constructor(protected http: HttpClient) { }

	/**
	 * Get file content by it path name.
	 * @param path (string) name to get file content.
	 * @returns (string) file content.
	 */
	protected async GetFile(path: string): Promise<any> {
		const res: any = await this.http.get(`${ this._url }/${ path }/index.md?ref=docs`).toPromise();
		return decodeURIComponent(escape(atob(res['content'])));
	}

	/**
	 * Get directory content basic data.
	 * @param path (string) name to get directory array content.
	 * @returns (any[]) folder content data array.
	 */
	protected async GetFolder(path: string): Promise<any> {
		return this.http.get(`${ this._url }/${ path }?ref=docs`).toPromise();
	}
}