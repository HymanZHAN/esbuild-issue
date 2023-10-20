import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyListComponent } from './lazy-list/lazy-list.component';
import { LazyCompComponent } from './lazy-comp/lazy-comp.component';

const routes: Routes = [
  {
    path: '',
    component: LazyListComponent,
  },
  {
    path: ':id',
    component: LazyCompComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyRoutingModule {}
