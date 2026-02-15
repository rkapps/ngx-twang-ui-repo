import { Component, inject, input } from "@angular/core";
import { TwangSelectionNode } from "../shared/node.types";
import { Router } from '@angular/router';
import { TwangTreeViewComponent } from "../shared/tree.view.component";

@Component({
    selector: 'twang-sidebar',
    standalone: true,
    imports: [TwangTreeViewComponent],
    template: `
      <twang-tree-view [nodes]="nodes()" (nodeClick)="onNodeClick($event)"></twang-tree-view> 
    `
})
export class TwangSidebarComponent<T> {

    private router = inject(Router);

    nodes = input<TwangSelectionNode<T>[]>([]);

    onNodeClick(node: TwangSelectionNode<T>) {
        console.log(node.link);
        this.router.navigate([node.link]);
    }
}
