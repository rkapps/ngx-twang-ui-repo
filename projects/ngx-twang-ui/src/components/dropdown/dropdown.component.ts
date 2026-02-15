import { Component, computed, effect, input, output, signal } from "@angular/core";
import { TwangTreeViewComponent } from "../shared/tree.view.component";
import { TwangSelectionNode } from "../shared/node.types";
import { TwangButtonComponent } from "../button/button.component";
import { OverlayModule } from "@angular/cdk/overlay";
import { SelectionModel } from '@angular/cdk/collections';
import { toSignal } from "@angular/core/rxjs-interop";
import { map, startWith } from "rxjs";


@Component({
    selector: 'twang-dropdown',
    standalone: true,
    imports: [TwangButtonComponent, TwangTreeViewComponent, OverlayModule],
    templateUrl: "./dropdown.component.html",
})
export class TwangDropDownComponent<T> {

    label = input<string>('Label');
    labelPosition = input<'top' | 'left'>('top');
    required = input(false);
    multiselect = input<boolean>(false);
    selected = input<string[]>([]);
    size = input<'sm' | 'md' | 'lg'>('sm');

    nodes = input<TwangSelectionNode[]>([]);
    readonly isOpen = signal<boolean>(false);
    change = output<TwangSelectionNode>();

    selectedNodes = new SelectionModel<String | number>(true, []);

    constructor() {
        // 2. Use an effect to sync the input to the SelectionModel
        effect(() => {
            const ids = this.selected();

            // Clear previous selection and select the new IDs
            this.selectedNodes.clear();
            if (ids.length > 0) {
                this.selectedNodes.select(...ids);
            }
        });
    }

    selectedIds = toSignal(
        this.selectedNodes.changed.pipe(
            map(() => [...this.selectedNodes.selected]), // Use spread [...] to ensure a new reference
            startWith([...this.selectedNodes.selected])  // Initial state
        ),
        { initialValue: [] }
    );

    selectedLabels = computed(() => {

        const ids = this.selectedIds();
        const allNodes = this.nodes();

        // Return the labels for the IDs found in the selection
        return allNodes.filter(node => ids.includes(node.id))
            .map(node => node.label);
    });


    onNodeClick(node: TwangSelectionNode) {
        // console.log(`DropDown - onNodeClick - ${node.label}:`);
        setTimeout(() => this.isOpen.set(false), 100);
        this.change.emit(node);

        if (!this.multiselect()) {
            this.selectedNodes.clear();
        }
        this.selectedNodes.select(node.id);
    }
}