import { Component, computed, input, output } from "@angular/core";

@Component({
    selector: 'twang-button',
    standalone: true,
    templateUrl: "./button-component.html"
  })

  export class TwangButtonComponent {

    // 1. Define Signal-based inputs
    variant = input<'primary' | 'secondary'>('primary');
    size = input<'sm' | 'md' | 'lg'>('md');
    isFluid = input<boolean>(false);
    type = input<'button' | 'submit' | 'reset'>('button');
    label = input<string>("Button 111");
  
    // 2. Create the "function" that returns the class string
    // This only re-runs when variant(), size(), or isFluid() changes.
    buttonClasses = computed(() => {
      const baseClass = 'twang-btn';
      const variantClass = `twang-btn-${this.variant()}`;
      const sizeClass = `twang-btn-${this.size()}`;
      const fluidClass = this.isFluid() ? 'twang-btn-fluid' : '';
  
      return `${baseClass} ${variantClass} ${sizeClass} ${fluidClass}`.trim();
    });    

    btnClick = output<MouseEvent>(); 


  }