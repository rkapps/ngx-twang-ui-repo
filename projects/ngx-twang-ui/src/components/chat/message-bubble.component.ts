import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { ChatMessage } from './chat.message';


@Component({
  selector: 'twang-message-bubble',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './message-bubble.component.html',
  host: {
    'class': 'block pb-1'
  }
})
export class TwangMessageBubbleComponent {
  message = input.required<ChatMessage>();
  showMarkdown = input<boolean>(true);
}