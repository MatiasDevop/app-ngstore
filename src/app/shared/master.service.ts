import { updateblog } from './store/Blog/blog.actions';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from './store/Blog/blog.model';
import { Observable, map, tap } from 'rxjs';

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

  CreateBlog(bloginput: BlogModel): Observable<any> {
    debugger
    return this.http.post("http://localhost:3000/Blogs", bloginput).pipe(
      tap(()=>{
        //this.http.get<BlogModel>("http://localhost:3000/Blogs?_limit=1&_sort=id&_order=desc");
        this.getLastBlog().subscribe();
      })
    );
  }

  private getLastBlog(): Observable<BlogModel>{
    return this.http.get<BlogModel[]>("http://localhost:3000/Blogs").pipe(
      map(blogs => blogs[blogs.length - 1]) // Extract the last blog from the array
    );
  }

  UpdateBlog(bloginput: BlogModel): Observable<any> {
    debugger
    return this.http.put("http://localhost:3000/Blogs/"+ bloginput.id, bloginput);
  }
}
