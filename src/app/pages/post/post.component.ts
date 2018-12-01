import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { SeoService } from '../../services/seo/seo.service';
import { BlogService } from '../../services/blog/blog.service';
import { observable2promise } from '../../functions/utils.functions';
import { BASE_HREF } from '../../classes/constants.class';
import { Post } from '../../models/post.model';

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
	/** Page ID for disqus configuration */
	public pageID: string = null;
	/** Flag to show spinner while post is loading */
	public loading: boolean = false;
	/** Current post data */
	public post: Post = null;

	constructor(
		private title: Title,
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private blogService: BlogService,
		private seo: SeoService
	) { }

	/**
	 * Load current post data.
	 */
	public async ngOnInit(): Promise<void> {
		this.pageID = `${ BASE_HREF }${ this.router.url }`;
		window.scroll(0, 0);
		try {
			const { id } = await observable2promise(this.activatedRoute.params);
			this.post = await this.blogService.GetPost(id);
			this.title.setTitle(`IvánHdzD - ${ this.post.title }`);
			this.seo.SetTags({
				title: this.post.title,
				description: this.post.content,
				image: this.post.thumbnail,
				path: this.router.url
			});
		} catch (err) {
			console.warn('[ERROR] PostComponent.ngOnInit:', err);
		} finally {
			this.loading = false;
		}
	}
}