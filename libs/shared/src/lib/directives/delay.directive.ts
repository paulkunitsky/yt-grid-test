import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit {
  @Input() delay: number;

  constructor(private view: ViewContainerRef, private template: TemplateRef<HTMLElement>) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.view.createEmbeddedView(this.template);
    }, this.delay);
  }
}
