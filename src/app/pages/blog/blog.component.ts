import { Component, OnInit } from '@angular/core';

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

	constructor(private blogService: BlogService) { }

	/**
	 * Load posts list from blog service.
	 */
	public async ngOnInit(): Promise<void> {
		this.blogService.posts$.subscribe((posts: Post[]) => this.posts = posts);
	}
}