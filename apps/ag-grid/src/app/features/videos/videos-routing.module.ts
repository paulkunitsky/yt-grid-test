import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosGridShellComponent } from './videos-grid-shell/videos-grid-shell.component';


const routes: Routes = [
  { path: '', component: VideosGridShellComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideosRoutingModule {
}
