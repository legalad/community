import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { ForumsService } from '../services/forums.service';
import { Thread } from '../services/data';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  threads: Thread[] | undefined;

  constructor(private route: ActivatedRoute, private forumService: ForumsService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // @ts-ignore
      this.threads = this.forumService.forum(params['forum_alias']).threads;
    });
  }
}

