import { Actions, SET_POSTS, UPDATE_POST } from '../actions/posts.actions';
import { Post } from '../../models/post.model';

/**
 * Posts reducer function.
 * @param state (Post[]) old state value, it's read only.
 * @param action (Actions) to do in this reducer.
 * @returns Post[]
 */
export function posts(state: Post[] = null, action: Actions): Post[] {
	switch (action.type) {
		case SET_POSTS:
			return <Post[]>action.payload;
		case UPDATE_POST:
			return updatePost(state, <Post>action.payload);
		default:
			return state;
	}
}

/**
 * Update a post in state array.
 * @param state (Post[]) old state value.
 * @param post (Post) data to update.
 * @returns Post[]
 */
function updatePost(state: Post[], post: Post): Post[] {
	if (!state) return [post];
	const index: number = state.findIndex((obj: Post) => obj.title === post.title);
	if (index === -1) return state;
	state[index] = post;
	return state;
}