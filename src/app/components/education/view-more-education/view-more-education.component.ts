import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { Subject, from } from 'rxjs';
import { takeUntil } from 'rxjs/operators'

@Component({
  selector: 'app-view-more-education',
  templateUrl: './view-more-education.component.html',
  styleUrls: ['./view-more-education.component.scss']
})
export class ViewMoreEducationComponent implements OnInit {

  postData: Post = new Post();
  postId;
  image: null;
  private unsubscribe$ = new Subject<void>();
  constructor(private route: ActivatedRoute, private blogService: BlogService) {
    if (this.route.snapshot.params['id']) {
      this.postId = this.route.snapshot.paramMap.get('id');
    }
  }
  ngOnInit() {
    this.blogService
     .getEducationnalPostbyId(this.postId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((result: Post) => {
        this.postData = result;
        this.postData.author = 'cherif ';
      });
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
