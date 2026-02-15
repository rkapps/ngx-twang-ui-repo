export interface TwangSelectionNode<T = string | number> {
    id: T;
    label: string;
    children?: TwangSelectionNode<T>[];
    disabled?: boolean;
    expanded?: boolean;
    icon?: string;
    link?: string | string[]; // Added for sidebar navigation support
  }