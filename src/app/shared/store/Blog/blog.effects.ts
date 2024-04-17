import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../master.service";
import { LOAD_BLOG, addblog, addblogsuccess, loadblogfail, loadblogsuccess } from "./blog.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { BlogModel } from "./blog.model";

@Injectable()

export class BlogEffects{
    
    constructor(private actions$: Actions, private service: MasterService){

    }

    _blog = createEffect(() => 
        this.actions$.pipe(
            ofType(LOAD_BLOG),
            exhaustMap((action) => {
                return this.service.GetAllBlogs().pipe(
                    map((data) => {
                        return loadblogsuccess({bloglist: data})
                    }),
                    catchError((_error) => of(loadblogfail({ ErroText: _error })))
                )
            })
        )
    );

    _addBlog = createEffect(() => 
        this.actions$.pipe(
            ofType(addblog),
            exhaustMap(action => {
                debugger
                return this.service.CreateBlog(action.bloginput).pipe(
                    map((data) => {
                        return addblogsuccess({bloginput: data as BlogModel})
                    }),
                    catchError((_error) => of(loadblogfail({ErroText: _error})))
                )
            })
        )
    );
}