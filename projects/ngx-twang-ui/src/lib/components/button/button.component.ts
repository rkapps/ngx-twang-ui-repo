import { Component, computed, input, output } from "@angular/core";
import { LucideAngularModule } from "lucide-angular";

@Component({
    selector: 'twang-button',
    standalone: true,
    imports: [LucideAngularModule],
    // Force the host tag to be a block-level element
    host: {
        'class': 'inline-block w-auto h-auto'
    },
    templateUrl: "./button.component.html"
})

export class TwangButtonComponent {

    // 1. Define Signal-based inputs
    variant = input<'primary' | 'secondary' | 'accent' | 'outline' | 'default'>('primary');
    size = input<'xs' | 'sm' | 'md' | 'lg'>('md');
    isFluid = input<boolean>(false);
    type = input<'button' | 'submit' | 'reset'>('button');
    label = input<string>('');
    disabled = input<boolean>(false);
    icon = input<string>('');


    // 2. Create the "function" that returns the class string
    // This only re-runs when variant(), size(), or isFluid() changes.
    buttonClasses = computed(() => {

        const baseClass = 'flex w-full items-center whitespace-nowrap rounded-lg font-medium transition duration-200 shadow-md';

        const variantMaps = {
            primary: `
                text-white bg-primary-600 
                hover:bg-primary-700 
                focus:ring-4 focus:ring-primary-300 focus:outline-none 
            `,

            secondary: 
                `
                bg-secondary-500 
                hover:bg-secondary-600 
                focus:ring-4 focus:ring-secondary-300 focus:outline-none 
            `,
            accent: `
                bg-accent-500 
                hover:bg-accent-600 
                focus:ring-4 focus:ring-accent-300 focus:outline-none 
            `,
            outline: `
                border-1 border-primary-500 
                text-primary-500 
                hover:bg-primary-50 focus:ring-2 focus:ring-primary-300 focus:outline-none 
            `,
            default: `
                border-0 
                text-primary-700 
                focus:outline-none shadow-none
            `
        };

        const disabledClass = this.disabled()
            ? 'opacity-50 cursor-not-allowed grayscale-[0.5] shadow-none pointer-events-none'
            : 'cursor-pointer';
        const sizeMaps = {

            xs: 'text-xs px-1 py-1',
            sm: 'text-sm px-3 py-2',
            md: 'text-base px-4 py-2.5',
            lg: 'text-lg px-6 py-3'
        };

        const fluidClass = this.isFluid() ? 'twang-btn-fluid' : '';

        return `${baseClass} ${variantMaps[this.variant()]} ${sizeMaps[this.size()]} ${fluidClass} ${disabledClass}`.trim();
    });

    btnClick = output<MouseEvent>();


}