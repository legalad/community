import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ForumsService } from '../services/forums.service';
import { Forum, Thread } from '../services/data';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {
  forum!: Forum;
  thread: Thread | undefined;

  constructor(private forumsService: ForumsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      // @ts-ignore
      let forum = this.route.snapshot.parent.params['forum_alias'];
      this.thread = this.forumsService.thread(forum, params['thread_alias']);
    })
  }
}
