import { Component, model, input, computed, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormValueControl } from '@angular/forms/signals';

@Component({
  selector: 'twang-textarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './textarea.component.html'
})
export class TwangTextareaComponent implements FormValueControl<string>{


  // Configuration inputs
  label = input<string>('Comments');
  labelPosition = input<'top' | 'left'>('top');
  placeholder = input<string>('Enter your message...');
  rows = input<number>(4);
  required = input<boolean>(false);

  // Two-way binding signal
  value = model<string>('');
  disabled = input<boolean>(false);
  size = input<'sm' | 'md' | 'lg'>('md');
  enter = output();


  inputClasses = computed(() => {

    const baseClass = 
      `flex w-full p-3 items-center whitespace-nowrap 
       font-medium text-slate-600 placeholder:text-slate-500
       bg-gray-50
       border border-slate-300 rounded-lg
       focus:ring-primary-400 focus:outline-none focus:ring-2
       dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800
      `;

    const disabledClass = this.disabled()
      ? 'opacity-50 cursor-not-allowed grayscale-[0.5] shadow-none pointer-events-none'
      : '';
    const sizeMaps = {
      sm: 'text-sm px-2 py-2',
      md: 'text-base px-5 py-2.5',
      lg: 'text-lg px-6 py-3'
    };

    // const fluidClass = this.isFluid() ? 'twang-btn-fluid' : '';

    return `${baseClass} ${sizeMaps[this.size()]} ${disabledClass}`.trim();

  });



  handleEnter(event: any) {
    console.log("reached");
    // Submit only if Enter is pressed without the Shift key
    if (!event.shiftKey) {
      event.preventDefault(); // Prevents the newline character in textarea
      this.enter.emit();
    }
}  
  
}