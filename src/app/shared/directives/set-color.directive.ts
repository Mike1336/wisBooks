import { Directive, ElementRef, Input, Renderer2, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[setColor]',
})
export class SetColorDirective implements OnInit, OnChanges {

  @Input('setColor')
  public color: string;

  constructor(private _el: ElementRef, private r: Renderer2) { }

  public ngOnChanges(): void {
    this.r.setStyle(this._el.nativeElement, 'background', this.color);
  }

  public ngOnInit(): void {
  }
  

}
