import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { BlogService } from '../../services/blog/blog.service';
import { Post } from 'src/app/models/post.model';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
	/** Posts list instance */
	public posts: Post[] = null;
	/** Flag to show/hide load more posts button */
	public showBtnLoadMorePosts: boolean = true;

	constructor(title: Title, private blogService: BlogService) {
		title.setTitle('IvánHdzD - Blog');
	}

	/**
	 * Load posts list from blog service.
	 */
	public async ngOnInit(): Promise<void> {
		window.scroll(0, 0);
		try {
			this.showBtnLoadMorePosts = await this.blogService.InitializePosts();
		} catch (err) {
			console.warn('[ERROR] BlogComponent.ngOnInit:', err);
		} finally {
			this.blogService.posts$.subscribe((posts: Post[]) =>
				this.posts = posts.filter((post: Post) => !!post.cover));
		}
	}

	/**
	 * Load more posts data.
	 */
	public async LoadMorePosts(): Promise<void> {
		try {
			this.showBtnLoadMorePosts = await this.blogService.LoadMorePosts();
		} catch (err) {
			console.warn('[ERROR] BlogComponent.LoadMorePosts:', err);
		}
	}
}