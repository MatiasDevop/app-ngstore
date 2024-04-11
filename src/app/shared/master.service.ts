import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from './store/Blog/blog.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }
  haveAccess(){
    return true;
  }

  GetAllBlogs(): Observable<BlogModel[]>{
    return this.http.get<BlogModel[]>('http://localhost:3000/Blogs');
  }

  CreateBlog(bloginput: BlogModel){
    debugger
    return this.http.post("http://localhost:3000/Blogs", bloginput).pipe(
      tap(()=>{
        this.http.get<BlogModel>("http://localhost:3000/Blogs?_limit=1&_sort=id&_sort=id&_order=desc")
      }) 
    )
  }
}
