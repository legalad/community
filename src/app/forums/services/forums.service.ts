import { Injectable } from '@angular/core';
import {Data, Forum, Users} from './data';

@Injectable()
export class ForumsService {
  private _users = Users;
  private _data = Data;

/*  constructor() {
    this._data = Data;
    this._data = Users;
  }*/

  get forums() {
    return this._data;
  }

  forum(forumAlias: string) {
    return this._data.find(row => {
      return row.alias === forumAlias;
    });
    /*(row => {
      return row.alias === forumAlias;
    });*/
  }

  threads(forumAlias: string) {
    // @ts-ignore
    return this._data.find(row => {
      return row.alias === forumAlias;
    }).threads;
  }

  thread(forumAlias: string, threadAlias: string) {
    // @ts-ignore
    return this.forum(forumAlias).threads.find(row => {
      console.error(row);
      return row.alias === threadAlias;
    });
  }

  get users() {
    return this._users;
  }
}
