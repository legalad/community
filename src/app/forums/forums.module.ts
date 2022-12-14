import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { ClarityModule } from '@clr/angular';
import { RouterModule, Routes } from "@angular/router";

import { ForumComponent } from './forum/forum.component';
import { ForumsComponent } from './forums/forums.component';
import { ThreadComponent } from './thread/thread.component';
import { ThreadsComponent } from './threads/threads.component';

import { ForumsService } from './services/forums.service';

const forumsRoutes: Routes = [
  {path: 'forums', component: ForumsComponent},
  {path: 'forums/:forum_alias', component: ForumComponent, children: [
      { path: '', component: ThreadsComponent},
      { path: ':thread_alias', component: ThreadComponent}
    ]}
];

@NgModule({
  declarations: [
    ForumComponent,
    ForumsComponent,
    ThreadComponent,
    ThreadsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ClarityModule,
    RouterModule.forChild(forumsRoutes),
  ],
  providers: [
    ForumsService
  ]
})
export class ForumsModule { }
