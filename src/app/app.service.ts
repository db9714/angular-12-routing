import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  public base_url = environment.environmentUrl;
  constructor() {}
}
