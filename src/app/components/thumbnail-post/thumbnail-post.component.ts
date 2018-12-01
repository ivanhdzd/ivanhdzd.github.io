import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
	selector: 'app-thumbnail-post',
	templateUrl: './thumbnail-post.component.html',
	styleUrls: ['./thumbnail-post.component.scss']
})
export class ThumbnailPostComponent  {
	/** Post input value */
	@Input() post: Post = null;
}