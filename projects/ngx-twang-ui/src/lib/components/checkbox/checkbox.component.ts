import { Component, input, forwardRef, model, computed } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import { FormValueControl } from '@angular/forms/signals';
import { LucideAngularModule } from 'lucide-angular';
import { TwangButtonComponent } from "../button/button.component";

@Component({
  selector: 'twang-checkbox',
  standalone: true,
  imports: [FormsModule, LucideAngularModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TwangCheckboxComponent),
      multi: true,
    },
  ],
  templateUrl: './checkbox.component.html',
  host: {
    'class': 'border-0 block w-full self-start' // or 'contents' to make it invisible
  },
})
export class TwangCheckboxComponent implements FormValueControl<boolean> {

  variant = input<'primary' | 'secondary' | 'success' | 'danger' | 'warning'>('secondary');

  // Configuration inputs
  label = input<string>('');
  labelPosition = input<'top' | 'left'>('top');
  placeholder = input<string>('');
  rows = input<number>(4);
  required = input<boolean>(false);
  type = input<'checkbox'>('checkbox');
  icon = input<string>('');
  disabled = input<boolean>(false);
  size = input<'sm' | 'md' | 'lg'>('md');

  // Two-way binding signal
  value = model<boolean>(false);

  // CVA boilerplate
  onChange: any = () => { };
  onTouched: any = () => { };

  inputClasses = computed(() => {

    let baseClass = 
      `flex w-full items-center whitespace-nowrap 
       font-medium text-slate-600 placeholder:text-slate-400
       bg-white 
       border border-gray-300 rounded-lg
       focus:ring-primary-400 focus:outline-none focus:ring-2
       dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800
      `;

    const disabledClass = this.disabled()
      ? 'opacity-50 cursor-not-allowed grayscale-[0.5] shadow-none pointer-events-none'
      : '';
    const sizeMaps = {
      sm: 'text-sm px-3 py-2',
      md: 'text-base px-4 py-2.5',
      lg: 'text-lg px-6 py-3'
    };

    // const fluidClass = this.isFluid() ? 'twang-btn-fluid' : '';

    return `${baseClass} ${sizeMaps[this.size()]} ${disabledClass}`.trim();


  });
  // handleInput(event: Event): void {
  //   const val = (event.target as HTMLInputElement).value;
  //   // this.internalValue.set(val);
  //   this.onChange(val);
  // }

  // // CVA Methods
  // // writeValue(value: string): void { this.internalValue.set(value || ''); }
  // registerOnChange(fn: any): void { this.onChange = fn; }
  // registerOnTouched(fn: any): void { this.onTouched = fn; }
  // setDisabledState(isDisabled: boolean): void { this.disabled.set(isDisabled); }
}
