export interface ChatMessage {
    id: number;
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp?: Date;
    response_id: string;
  }