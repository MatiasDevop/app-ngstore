import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { MasterService } from "../../master.service";
import { LOAD_BLOG, loadblogsuccess } from "./blog.actions";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";

@Injectable()

export class BlogEffects{
    
    constructor(private actions$: Actions, private service: MasterService){

    }

    _blog=createEffect(() => 
        this.actions$.pipe(
            ofType(LOAD_BLOG),
            exhaustMap((action) => {
                return this.service.GetAllBlogs().pipe(
                    map((data) => {
                        return loadblogsuccess({bloglist: data})
                    }),
                    catchError(() => EMPTY)
                )
            })
        )
    )
}