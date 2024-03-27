import { createAction, props } from "@ngrx/store";

export const increment = createAction("increment")
export const decrement = createAction("decrement")
export const reset = createAction("reset")
export const customincrement = createAction("[Counter] custome increment", props<{ value: number, action: string }>()); //you can add more parameters also
export const changechannelname = createAction("[Change Channel] changechannelname", props<{ channel: string }>()); //you can add more parameters also


