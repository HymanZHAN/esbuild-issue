import { Component } from '@angular/core';

@Component({
  selector: 'app-lazy-list',
  templateUrl: './lazy-list.component.html',
  styleUrls: ['./lazy-list.component.css'],
})
export class LazyListComponent {
  lazyItems = ['Item 1', 'Item 2', 'Item 3'];
}
