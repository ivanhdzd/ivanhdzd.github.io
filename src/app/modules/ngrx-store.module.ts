import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { posts } from '../ngrx-store/reducers/posts.reducer';

@NgModule({
	imports: [StoreModule.forRoot({ posts })]
})
export class NgrxStoreModule { }