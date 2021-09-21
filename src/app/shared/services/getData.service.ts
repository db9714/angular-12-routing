import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Data } from '../models/data.model';
import { AppState } from './app-state';


@Injectable({
    providedIn: 'root',
})
export class GetData {
    constructor(public state: AppState) { }

    getSearchData(keyword: any): Observable<Data> {
        return of(keyword);
    }

}
