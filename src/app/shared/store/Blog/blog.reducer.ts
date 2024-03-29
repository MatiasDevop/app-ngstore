import { createReducer, on } from "@ngrx/store";
import { BlogState } from "./blog.state";
import { addblog, loadblog } from "./blog.actions";
import { state } from "@angular/animations";

const _blogReducer = createReducer(
    BlogState,
    on(loadblog, (state) => {
      return {
        ...state, // here just like that cus we're not modifyng anything
      };
    }),
    on(addblog, (state, action) => {
      const _blog={...action.bloginpu}
      return{
        ...state,
        blogList: [...state.blogList, _blog]
      }
    })
  
  );
  
  export function blogReducer(state: any, action: any) {
    return _blogReducer(state, action);
  }
  