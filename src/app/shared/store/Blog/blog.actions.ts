import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./blog.model";

export const loadblog=createAction('loadblog');

export const addblog=createAction('[blog] addblog', props<{bloginput: BlogModel}>());

export const updateblog=createAction('[blog] updateblog', props<{bloginput: BlogModel}>());

export const deleteblog=createAction('[blog] deleteblog', props<{id: number}>());