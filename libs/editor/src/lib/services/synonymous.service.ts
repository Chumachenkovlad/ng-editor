import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Word } from '../models';

const DEFAULT_FILTER = {
  max: '4'
};

@Injectable()
export class SynonymousService {
  constructor(private readonly http: HttpClient) {}

  getSynonymous(word: string): Observable<Word[]> {
    /*
      Would be great to move http logic to ApiService
      Endpoint to environment in case realworld app
    */
    return this.http.get<Word[]>('https://api.datamuse.com/words', {
      params: new HttpParams({
        fromObject: {
          ...DEFAULT_FILTER,
          ml: word
        }
      })
    });
  }
}
