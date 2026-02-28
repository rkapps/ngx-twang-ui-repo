import { Component, input, output, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TwangTab {
    id: string;
    label: string;
    icon?: string;
    badge?: string | number;
}

@Component({
    selector: 'twang-tabs',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './tabs.component.html',
    host: {
        'class': 'block'
    }
})
export class TwangTabsComponent {
    // Configuration
    tabs = input.required<TwangTab[]>();
    activeTabId = input<string>('');
    variant = input<'underline' | 'pill' | 'segmented' | 'button' | 'box'>('underline');
    size = input<'sm' | 'md' | 'lg'>('sm');

    // Events
    tabChange = output<string>();

    // Internal active state
    private _activeTab = signal<string>('');

    // Computed active tab
    activeTab = computed(() => {
        const inputActive = this.activeTabId();
        return inputActive || this._activeTab() || this.tabs()[0]?.id || '';
    });

    selectTab(tabId: string) {
        this._activeTab.set(tabId);
        this.tabChange.emit(tabId);
    }

    isActive(tabId: string): boolean {
        return this.activeTab() === tabId;
    }

    // Size classes
    getSizeClasses() {
        const sizes = {
            xs: 'text-xs px-1 py-1',
            sm: 'text-sm px-3 py-2',
            md: 'text-base px-4 py-2.5',
            lg: 'text-lg px-6 py-3'
        };
        return sizes[this.size()];
    }
}