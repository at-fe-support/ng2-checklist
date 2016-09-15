import { ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
export declare class ChecklistDirective implements AfterViewInit, OnDestroy {
    checklist: Array<string>;
    el: ElementRef;
    name: string;
    change(): void;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    isChecked(): boolean;
}
