import { BlogModel, Blogs } from "../Blog/blog.model";
import { CounterModel } from "../counter.model";

export interface AppStateModel{
    counter: CounterModel,
    blog: Blogs
}