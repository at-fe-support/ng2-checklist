import { Directive, ElementRef, AfterViewInit, Input, HostListener } from '@angular/core';

let storage: Array<string> = [];
let $checkallElm: any;

@Directive(
  {
    selector: '[checklist]',
    host: {
      '[checked]': 'isChecked()'
    }
  }
)

export class ChecklistDirective implements AfterViewInit {

  @Input('checklist') checklist: Array<string>;

  el: ElementRef;

  @HostListener('change') change() {
    let $native = this.el.nativeElement;
    let value = $native.value;
    if ($native.checked) {
      if (value === 'all') {
        this.checklist.splice(0);
        for (let i in storage) {
          this.checklist.push(storage[i]);
        }
      } else {
        this.checklist.push(value);
        if (storage.length === this.checklist.length) {
          $checkallElm.checked = true;
        }
      }
    } else {
      if(value === 'all') {
        this.checklist.splice(0);
      } else {
        $checkallElm.checked = false;
        this.checklist.splice(this.checklist.indexOf(this.el.nativeElement.value), 1);
      }
    }
  }

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngAfterViewInit() {
    let value = this.el.nativeElement.value;
    if (value !== 'all') {
      storage.push(value);
    } else {
      $checkallElm = this.el.nativeElement;
    }
  }

  isChecked() {
    let value = this.el.nativeElement.value;
    return (this.checklist.indexOf(value) !== -1);
  }

}
