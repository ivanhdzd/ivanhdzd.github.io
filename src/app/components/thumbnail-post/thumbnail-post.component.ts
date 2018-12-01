import { Component, Input } from '@angular/core';

import { Post } from '../../models/post.model';

@Component({
	selector: 'app-thumbnail-post',
	templateUrl: './thumbnail-post.component.html',
	styleUrls: ['./thumbnail-post.component.scss']
})
export class ThumbnailPostComponent  {
	@Input() post: Post = null;
}