import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LazyService {
  items$ = of(['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']);
}
