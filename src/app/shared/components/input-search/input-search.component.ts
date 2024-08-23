import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputSearchComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputSearchComponent),
      multi: true,
    },
  ],
})
export class InputSearchComponent implements ControlValueAccessor, Validator {
  value: string = '';
  disabled: boolean = false;
  touched: boolean = false;
  onChange: any = (value: any) => {};
  onTouched: any = () => {};

  @Input()
  placeholder?: string;

  @Input()
  inputClass?: string;

  @Input()
  divClass?: string;

  @Input()
  type?: string;

  @Input()
  icon?: IconProp;

  @Input()
  error: any;

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (!control.value || control.value === '') {
      return { required: true };
    }
    return null;
  }

  valueChanged(value: string) {
    this.onChange(value);
    this.markAsTouched();
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.touched = true;
      this.onTouched();
    }
  }
}
