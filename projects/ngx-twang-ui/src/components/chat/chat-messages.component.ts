import { Component, input, ViewChild, ElementRef, AfterViewChecked, viewChild, afterRenderEffect, effect, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwangMessageBubbleComponent } from './message-bubble.component';
import { ChatMessage } from './chat.message';

@Component({
    selector: 'twang-chat-messages',
    standalone: true,
    imports: [CommonModule, TwangMessageBubbleComponent],
    templateUrl: './chat-messages.component.html',
    host: {
    }
})
export class TwangChatMessagesComponent {
    messages = input.required<ChatMessage[]>();
    autoScroll = input<boolean>(true);
    showMarkdown = input<boolean>(true);


}