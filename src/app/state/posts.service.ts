import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { tap } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsStore } from './posts.store';

@Injectable({ providedIn: 'root' })
export class PostsService {

  constructor(private postsStore: PostsStore, private http: HttpClient) {
  }


  get() {
    return this.http.get<Post[]>('https://api.com').pipe(tap(entities => {
      this.postsStore.set(entities);
    }));
  }

  add(post: Post) {
    this.postsStore.add(post);
  }

  update(id, post: Partial<Post>) {
    this.postsStore.update(id, post);
  }

  remove(id: ID) {
    this.postsStore.remove(id);
  }

}
