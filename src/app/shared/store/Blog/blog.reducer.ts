import { createReducer, on } from "@ngrx/store";
import { BlogState } from "./blog.state";
import { addblog, addblogsuccess, deleteblog, loadblog, loadblogfail, loadblogsuccess, updateblog } from "./blog.actions";
import { BlogModel } from "./blog.model";

const _blogReducer = createReducer(
    BlogState,
    on(loadblog, (state) => {
      return {
        ...state, // here just like that cus we're not modifyng anything
      };
    }),
    on(loadblogsuccess, (state, action) => {
      return{
        ...state,
        blogList: [...action.bloglist],
        errorMessage:''
      }
    }),
    on(loadblogfail, (state, action) => {
      console.log('reducer--', action.ErroText)
      return{
        ...state,
        blogList:[],
        errorMessage: action.ErroText?.message
      }
    }),
    // on(addblog, (state, action) => { //no needed cuz addblogsuccess will do it with server
    //   const _blog = {...action.bloginput};
    //   _blog.id = state.blogList.length + 1;
    //   return{
    //     ...state,
    //     blogList: [...state.blogList, _blog]
    //   }
    // }),
    on(addblogsuccess, (state, action) => { //if it's success we are going to enter here
      const _blog = {...action.bloginput}; 
     // _blog.id = state.blogList.length + 1;
     debugger
      return{
        ...state,
        blogList: [...state.blogList, _blog]
      }
    }),
    on(updateblog, (state, action) => {
      const _blog = {...action.bloginput};
      const updateblog = state.blogList.map(blog => {
        return _blog.id === blog.id? _blog : blog;
      })
      return{
        ...state,
        blogList: updateblog
      }
    }),
    on(deleteblog, (state, action) => {
      debugger
      const updateblog = state.blogList.filter((data: BlogModel) =>{
        return action.id !== data.id;
      });
      return{
        ...state,
        blogList: updateblog
      }
    })
  
  );
  
  export function blogReducer(state: any, action: any) {
    return _blogReducer(state, action);
  }
  