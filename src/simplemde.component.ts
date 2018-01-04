import {
  AfterViewInit,
  Component,
  ElementRef,
  forwardRef,
  Inject,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as SimpleMDE from 'simplemde';

import { SIMPLEMDE_DEFAULT_OPTIONS } from './simplemde_default_options';

@Component({
  selector: 'simplemde',
  template: `<textarea #simplemde></textarea>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SimpleMDEComponent),
      multi: true
    }
  ]
})
export class SimpleMDEComponent implements ControlValueAccessor, AfterViewInit, OnDestroy {
  @ViewChild('simplemde') textarea: ElementRef;
  @Input() options: SimpleMDE.Options;
  simplemde: SimpleMDE;
  _onChange: (value: string) => void;
  temp: string;

  constructor(
    @Inject(SIMPLEMDE_DEFAULT_OPTIONS)
    private default_options: SimpleMDE.Options
  ) {}

  ngAfterViewInit(): void {
    this.simplemde = new SimpleMDE({
      ...this.default_options,
      ...this.options,
      element: this.textarea.nativeElement
    });

    if (this.temp) {
      this.simplemde.value(this.temp);
    }

    this.simplemde.codemirror.on('change', () => {
      this.onChange(this.simplemde.value());
    });
  }

  ngOnDestroy() {
    delete this.simplemde;
  }

  onChange(value: any) {
    if (this._onChange) {
      this._onChange(value);
    }
  }

  writeValue(value: string): void {
    if (this.simplemde) {
      this.simplemde.value(value);
    } else {
      this.temp = value;
    }
  }

  registerOnChange(fn: (value: string) => void) {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
}
