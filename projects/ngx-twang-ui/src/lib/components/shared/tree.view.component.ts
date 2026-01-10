import { Component, computed, input, model, output } from "@angular/core";
import { TwangSelectionNode } from "./node.types";
import { TwangButtonComponent } from "../button/button.component";
import { LucideAngularModule } from 'lucide-angular';
import { CommonModule } from "@angular/common";

@Component({
    selector: 'twang-tree-view',
    standalone: true,
    imports: [LucideAngularModule, TwangButtonComponent, CommonModule],
    host: {
        'class': 'block w-full' // Forces the tree container to fill the overlay
    },
    templateUrl: './tree.view.component.html'
})
export class TwangTreeViewComponent<T> {

    nodes = input.required<TwangSelectionNode<T>[]>();
    mode = input<'select' | 'checkbox'>('select'); // The toggle switch
    level = input(0); // Track depth for indentation
    selection = model<T[]>([]);
    multiselect = input<boolean>(false);

    selectionSet = computed(() => new Set(this.selection()));

    // Selection/Navigation Events
    nodeClick = output<TwangSelectionNode<T>>();
    selectionChange = output<string[]>();

    isSelected(node: TwangSelectionNode<T>) {
        return this.selectionSet().has(node.id);
    }

    hasChildren(node: TwangSelectionNode<T>) : boolean{
        return (node.children && node.children?.length > 0) ?? false;
    }

    onCheck(node: TwangSelectionNode<T>) {

    }

    onNodeClick(node: TwangSelectionNode<T>) {
        if (this.hasChildren(node)) return;

        if (!this.multiselect()) {
            this.selectionSet().clear();
        }
        this.selectionSet().add(node.id);
        this.nodeClick.emit(node);
    }

    onToggleSelection(node: TwangSelectionNode<T>) {
        node.expanded = !node.expanded;
    }


}