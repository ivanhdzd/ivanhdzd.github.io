import { Actions, SET_POSTS, UPDATE_POST, UPDATE_POSTS } from '../actions/posts.actions';
import { Post } from '../../models/post.model';
import { clone } from '../../functions/utils.functions';

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
			return updatePost(clone(state), <Post>action.payload);
		case UPDATE_POSTS:
			return updatePosts(clone(state), <Post[]>action.payload);
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

/**
 * Update posts list content in current state.
 * @param state (Post[]) old state value.
 * @param posts (Post[]) data to update.
 * @returns Post[]
 */
function updatePosts(state: Post[], posts: Post[]): Post[] {
	if (!state) return posts;
	posts.forEach((post: Post) => {
		const index: number = state.findIndex((obj: Post) => obj.title === post.title);
		if (index === -1) state.push(post);
		else state[index] = post;
	});
	return state.sort((a: Post, b: Post) => +b.date - +a.date);
}