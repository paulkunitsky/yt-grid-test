import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { TestModule } from './features/test/test.module';
import { VideosModule } from './features/videos/videos.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: (): Promise<VideosModule> => import('./features/videos/videos.module').then((m): VideosModule => m.VideosModule)
  }
];

const devRoutes: Routes = [
  ...routes,
  {
    path: 'test',
    loadChildren: (): Promise<TestModule> => import('./features/test/test.module').then((m): TestModule => m.TestModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(environment.production ? routes : devRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
