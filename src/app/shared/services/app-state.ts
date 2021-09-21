import { Injectable } from '@angular/core';
import { Data } from '../models/data.model';

@Injectable()
export class AppState {
    data!: Data;
    searchKeyword: string;
    constructor() {
        this.searchKeyword = '';
    }
}
