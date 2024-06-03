import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostCompComponent } from './post/post-comp/post-comp.component';

const routes: Routes = [{
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
