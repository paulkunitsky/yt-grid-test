import { Injectable } from '@angular/core';

export enum LocalStorageKeys {
  enableShMockApi = 'enableShMockApi'
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  readonly keys = LocalStorageKeys;

  getItem(key: LocalStorageKeys, def: string|null = null): string|null {
    return localStorage.getItem(key) || def;
  }

  setItem(key: LocalStorageKeys, value: string): void {
    localStorage.setItem(key, value);
  }

  removeItem(key: LocalStorageKeys): void {
    localStorage.removeItem(key);
  }

  hasItem(key: LocalStorageKeys): boolean {
    return localStorage.getItem(key) !== null;
  }
}
