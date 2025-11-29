import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  show(title: string, description: string) {
    // Simple alert for now - can be enhanced with a proper toast component
    alert(`${title}\n${description}`);
  }
}

