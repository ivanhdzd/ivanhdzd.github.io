import { Post } from '../models/post.model';

export interface AppState {
	readonly posts: Post[];
}