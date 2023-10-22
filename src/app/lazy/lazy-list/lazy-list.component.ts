import { Component, inject } from '@angular/core';
import { LazyService } from 'src/app/lazy.service';

@Component({
  selector: 'app-lazy-list',
  templateUrl: './lazy-list.component.html',
  styleUrls: ['./lazy-list.component.css'],
})
export class LazyListComponent {
  lazyItems$ = inject(LazyService).items$;
}
