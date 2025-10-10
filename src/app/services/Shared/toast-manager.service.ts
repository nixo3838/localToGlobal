import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})

export class ToastManagerService {

  private toastQueue: { message: Message, expiry: number }[] = [];
  private maxToasts = 3;

  constructor(private messageService: MessageService) { }

  showToast(severity: string, summary: string, detail: string, life: number = 3000) {
    const currentTime = Date.now();
    const expiryTime = currentTime + life;

    const newToast: Message = {
      severity,
      summary,
      detail,
      life,
      data: { duration: life }
    };

    // Clean up expired toasts
    this.toastQueue = this.toastQueue.filter(item => item.expiry > currentTime);

    // Add new toast to the queue
    this.toastQueue.push({ message: newToast, expiry: expiryTime });

    // If over limit, remove oldest
    if (this.toastQueue.length > this.maxToasts) {
      this.toastQueue = this.toastQueue.slice(this.toastQueue.length - this.maxToasts);
    }

    // Show only non-expired toasts
    this.messageService.clear();
    this.messageService.addAll(this.toastQueue.map(item => item.message));
  }

  // Optional: to clear all toasts programmatically
  clearAll() {
    this.toastQueue = [];
    this.messageService.clear();
  }

  // Optional: allow setting max toast count
  setMaxToasts(max: number) {
    this.maxToasts = max;
  }

}