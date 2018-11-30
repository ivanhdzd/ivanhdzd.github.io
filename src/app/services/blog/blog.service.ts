import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BaseHttpService } from '../base-http.service';
import { SetPosts, UpdatePost } from 'src/app/ngrx-store/actions/posts.actions';
import { AppState } from 'src/app/ngrx-store/app-state';
import { Post } from 'src/app/models/post.model';

@Injectable({
	providedIn: 'root'
})
export class BlogService extends BaseHttpService {
	/** Posts list observable */
	public readonly posts$: Observable<Post[]> = this.store.select('posts');

	constructor(protected http: HttpClient, private store: Store<AppState>) {
		super(http);
		this._GetPosts();
	}

	/**
	 * Get posts list from Github reopsitory.
	 */
	private async _GetPosts(): Promise<void> {
		const posts: Post[] = (await this.GetFolder('blog')).map(({ name }) => ({
			date: new Date(name.replace(name.split(/^\d{4}-\d{2}-\d{2}/).join(''), '')),
			title: name.split(/^\d{4}-\d{2}-\d{2}-/).join('').replace(/-/g, ' '),
			id: name
		})).sort((a, b) => b.date - a.date);
		this.store.dispatch(new SetPosts(posts));
	}
}