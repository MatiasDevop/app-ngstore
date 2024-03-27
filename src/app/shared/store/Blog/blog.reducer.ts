import { createReducer, on } from "@ngrx/store";
import { BlogState } from "./blog.state";
import { loadblog } from "./blog.actions";

const _blogReducer = createReducer(
    BlogState,
    on(loadblog, (state) => {
      return {
        ...state, // here just like that cus we're not modifyng anything
      };
    })
  
  );
  
  export function blogReducer(state: any, action: any) {
    return _blogReducer(state, action);
  }
  