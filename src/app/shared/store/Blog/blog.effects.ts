import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../master.service";
import { LOAD_BLOG, addblog, addblogsuccess, deleteblog, deleteblogsuccess, loadblogfail, loadblogsuccess, updateblog, updateblogsuccess } from "./blog.actions";
import { catchError, exhaustMap, map, of, switchMap } from "rxjs";
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
            switchMap(action => 
                this.service.CreateBlog(action.bloginput).pipe(
                    switchMap((data) => of(
                        addblogsuccess({bloginput: data as BlogModel})
                    )),
                    catchError((_error) => of(loadblogfail({ErroText: _error})))
                )
            )
        )
    );

    _updateBlog = createEffect(() => 
        this.actions$.pipe(
            ofType(updateblog),
            switchMap(action => 
                this.service.UpdateBlog(action.bloginput).pipe(
                    switchMap(() => of(
                        updateblogsuccess({bloginput: action.bloginput})
                    )),
                    catchError((_error) => of(loadblogfail({ErroText: _error})))
                )
            )
        )
    );

    _DeleteBlog = createEffect(() => 
        this.actions$.pipe(
            ofType(deleteblog),
            switchMap(action => 
                this.service.DeleteBlog(action.id).pipe(
                    switchMap(() => of(
                        deleteblogsuccess({id: action.id})
                    )),
                    catchError((_error) => of(loadblogfail({ErroText: _error})))
                )
            )
        )
    );
}