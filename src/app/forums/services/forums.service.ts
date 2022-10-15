import { Injectable } from '@angular/core';
import { Data, Users } from './data';

@Injectable()
export class ForumsService {
  private _users: any;
  private _data: any;

  constructor() {
    this._data = Data;
    this._data = Users;
  }

  get forums() {
    return this._data;
  }

  forum(forumAlias: string) {
    return this._data.find((row: any) => {
      return row.alias === forumAlias;
    });
  }

  threads(forumAlias: string) {
    return this._data.find((row: any) => {
      return row.alias === forumAlias;
    }).threads;
  }

  thread(forumAlias: string, threadAlias: string) {
    return this.forum(forumAlias).threads.find((row: any) => {
      return row.alias === threadAlias;
    });
  }

  get users() {
    return this._users;
  }
}
