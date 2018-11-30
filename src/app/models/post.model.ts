export interface Post {
	id: string;
	date: Date;
	title: string;
	cover?: string;
	thumbnail?: string;
	content?: string;
}