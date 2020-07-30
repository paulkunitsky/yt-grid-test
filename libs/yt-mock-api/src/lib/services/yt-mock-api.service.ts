import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YtMockApiService {
  readonly apiBase = `${window.location.origin}/`;

  readonly isEnabled$ = new BehaviorSubject(true);

  get isEnabled(): boolean {
    return this.isEnabled$.getValue();
  }

  set isEnabled(v: boolean) {
    this.isEnabled$.next(v);
  }

  public enable(): void {
    this.isEnabled = true;
  }

  public disable(): void {
    this.isEnabled = false;
  }
}
