import { Action } from '@ngrx/store';

import { Post } from '../../models/post.model';

export const SET_POSTS: string = '[POST] SET_POSTS';
export const UPDATE_POST: string = '[POST] UPDATE_POST';
export const UPDATE_POSTS: string = '[POST] UPDATE_POSTS';

/**
 * Ngrx store action to set a posts array.
 * It needs a Post array in a constructor parameter.
 */
export class SetPosts implements Action {
	public readonly type: string = SET_POSTS;
	constructor(public payload: Post[]) { }
}

/**
 * Ngrx store action to update a post.
 * It needs a Post in a constructor parameter.
 */
export class UpdatePost implements Action {
	public readonly type: string = UPDATE_POST;
	constructor(public payload: Post) { }
}

/**
 * Ngrx store action to update a post.
 * It needs a Post in a constructor parameter.
 */
export class UpdatePosts implements Action {
	public readonly type: string = UPDATE_POSTS;
	constructor(public payload: Post[]) { }
}

export type Actions = SetPosts | UpdatePost | UpdatePosts;