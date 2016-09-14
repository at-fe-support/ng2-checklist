import { ElementRef, AfterViewInit } from '@angular/core';
export declare class ChecklistDirective implements AfterViewInit {
    checklist: Array<string>;
    el: ElementRef;
    change(): void;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    isChecked(): boolean;
}
