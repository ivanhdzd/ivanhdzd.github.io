import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { BaseHttpService } from '../base-http.service';
import { IMG_BASE_URL } from '../../classes/constants.class';
import { observable2promise } from 'src/app/functions/utils.functions';
import { SetPosts, UpdatePost, UpdatePosts } from '../../ngrx-store/actions/posts.actions';
import { AppState } from '../../ngrx-store/app-state';
import { Post } from '../../models/post.model';

@Injectable({
	providedIn: 'root'
})
export class BlogService extends BaseHttpService {
	/** Flag to prevent to try to load more posts that already exists */
	private allPostsAlreadyLoaded: boolean = false;
	/** Posts per page readonly constant value, production value: 12 */
	private readonly postsPerPage: number = 12;
	/** Current page to load posts thumbnail */
	private currentPage: number = 1;
	/** Posts list observable */
	public readonly posts$: Observable<Post[]> = this.store.select('posts');

	constructor(protected http: HttpClient, private store: Store<AppState>) {
		super(http);
	}

	/**
	 * Get posts list from Github reopsitory.
	 * @returns (boolean) true if there more posts to load, else return false.
	 */
	public async InitializePosts(): Promise<boolean> {
		let posts: Post[] = await observable2promise(this.posts$);
		if (posts && posts.length > 0) return;
		posts = (await this.GetFolder('blog')).map(({ name }) => this._GenerateBasicPost(name))
			.sort((a: Post, b: Post) => +b.date - +a.date);
		this.store.dispatch(new SetPosts(posts));
		return this.LoadMorePosts();
	}

	/**
	 * Load more posts basic data (thumbnail).
	 * @returns (boolean) true if there more posts to load, else return false.
	 */
	public async LoadMorePosts(): Promise<boolean> {
		if (this.allPostsAlreadyLoaded) return false;
		let posts: Post[] = await observable2promise(this.posts$);
		if (!posts || posts.length === 0) {
			await this.InitializePosts();
			return this.LoadMorePosts();
		}
		let lastIndex: number = this.postsPerPage * this.currentPage++;
		const firstIndex: number = lastIndex - this.postsPerPage;
		if (lastIndex >= posts.length) {
			lastIndex = posts.length;
			this.allPostsAlreadyLoaded = true;
		}
		posts = posts.slice(firstIndex, lastIndex).map((post: Post) => {
			post.cover = this._GetPostCover(post.id);
			return post;
		});
		this.store.dispatch(new UpdatePosts(posts));
		return !this.allPostsAlreadyLoaded;
	}

	/**
	 * Get post full data.
	 * @param id (string) post ID to can get it data.
	 * @returns (Post) post data.
	 */
	public async GetPost(id: string): Promise<Post> {
		let post: Post = null;
		const posts: Post[] = await observable2promise(this.posts$);
		if (posts) {
			post = posts.find((obj: Post) => id === obj.id);
			if (!post) return null;
			if (post.content) return post;
			post.content = await this.GetFile(`blog/${ id }`);
			post = this._SetOriginalTitle(post);
			this.store.dispatch(new UpdatePost(post));
		} else {
			post = this._GenerateBasicPost(id);
			post.cover = this._GetPostCover(id);
			post.content = await this.GetFile(`blog/${ id }`);
			post = this._SetOriginalTitle(post);
		}
		return post;
	}

	/**
	 * Generate a post with it basic data.
	 * @param id (string) post ID to generate basic post data.
	 * @returns (Post) post with it basic data.
	 */
	private _GenerateBasicPost(id: string): Post {
		return {
			date: new Date(id.replace(id.split(/^\d{4}-\d{2}-\d{2}/).join(''), '')),
			title: id.split(/^\d{4}-\d{2}-\d{2}-/).join('').replace(/-/g, ' '),
			id
		};
	}

	/**
	 * Generate post cover URL by it ID.
	 * @param id (string) post ID to generate cover URL.
	 * @returns (string) post cover URL.
	 */
	private _GetPostCover(id: string): string {
		return `${ IMG_BASE_URL }/blog/${ id }/cover.jpg`;
	}

	/**
	 * Get original title from content data.
	 * @param post (Post) to try to get original name.
	 * @returns (Post) post with title updated.
	 */
	private _SetOriginalTitle(post: Post): Post {
		const titleGetRegex: RegExp = /^#\s.+\n/;
		const titleBeautifyRegex: RegExp = /(#\s|\n)/g;
		const arr = titleGetRegex.exec(post.content);
		if (!arr) return post;
		post.title = arr[0].replace(titleBeautifyRegex, '');
		post.content = post.content.replace(titleGetRegex, '');
		return post;
	}
}