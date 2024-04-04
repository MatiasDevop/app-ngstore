import { createAction, props } from "@ngrx/store";
import { BlogModel } from "./blog.model";

export const LOAD_BLOG_SUCCESS="[Blog page] load blog success";
export const LOAD_BLOG="[Blog page] load blog";

export const LOAD_BLOG_FAIL="[Blog page] load blog";

export const loadblog=createAction(LOAD_BLOG);
export const loadblogsuccess=createAction(LOAD_BLOG_SUCCESS, props<{bloglist: BlogModel[]}>());

export const loadblogfail=createAction(LOAD_BLOG_FAIL, props<{ErroText: any}>());

export const addblog=createAction('[blog] addblog', props<{bloginput: BlogModel}>());

export const updateblog=createAction('[blog] updateblog', props<{bloginput: BlogModel}>());

export const deleteblog=createAction('[blog] deleteblog', props<{id: number}>());