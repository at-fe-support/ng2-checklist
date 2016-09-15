import { Directive, ElementRef, AfterViewInit, OnDestroy, Input, HostListener } from '@angular/core';

let storage: Array<string> = [];
let controlElm: Array<string> = [];

@Directive(
  {
    selector: '[checklist]',
    host: {
      '[checked]': 'isChecked()'
    }
  }
)

export class ChecklistDirective implements AfterViewInit, OnDestroy {

  @Input('checklist') checklist: Array<string>;

  el: ElementRef;
  name: string;

  @HostListener('change') change() {
    let value = this.el.nativeElement.value;
    if (this.el.nativeElement.checked) {
      if (value === 'all') {
        this.checklist.splice(0);
        for (let i in storage[this.name]) {
          this.checklist.push(storage[this.name][i]);
        }
      } else {
        this.checklist.push(value);
        if (storage[this.name].length === this.checklist.length) {
          controlElm[this.name].checked = true;
        }
      }
    } else {
      if(value === 'all') {
        this.checklist.splice(0);
      } else {
        controlElm[this.name].checked = false;
        this.checklist.splice(this.checklist.indexOf(value), 1);
      }
    }
  }

  constructor(el: ElementRef) {
    this.el = el;
    this.name = el.nativeElement.name;
  }

  ngAfterViewInit() {
    let value = this.el.nativeElement.value;
    if (typeof storage[this.name] === 'undefined') {
      storage[this.name] = [];
    }
    if (value !== 'all') {
      storage[this.name].push(value);
    } else {
      controlElm[this.name] = this.el.nativeElement;
    }
  }

  ngOnDestroy() {
    storage = [];
    controlElm = [];
  }

  isChecked() {
    let value = this.el.nativeElement.value;
    return (this.checklist.indexOf(value) !== -1);
  }

}
