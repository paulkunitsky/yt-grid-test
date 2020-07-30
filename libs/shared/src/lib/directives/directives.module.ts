import { NgModule } from '@angular/core';
import { DelayDirective } from './delay.directive';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DelayDirective,
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    DelayDirective,
  ]
})
export class DirectivesModule {
}
