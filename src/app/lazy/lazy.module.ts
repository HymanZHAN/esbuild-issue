import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyListComponent } from './lazy-list/lazy-list.component';
import { LazyCompComponent } from './lazy-comp/lazy-comp.component';

@NgModule({
  declarations: [LazyListComponent, LazyCompComponent],
  imports: [CommonModule, LazyRoutingModule],
})
export class LazyModule {}
