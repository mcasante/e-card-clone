import type { Readable, Writable } from 'svelte/store';
import { browser } from '$app/environment';

const LSManager = {
  set: <T>(key: string, value: T) => {
    if(!browser) return
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
  },
  get: (key: string) => {
    if(!browser) return
    const serializedValue = localStorage.getItem(key);
    return serializedValue ? JSON.parse(serializedValue) : null;
  },
  remove: (key: string) => {
    if(!browser) return
    localStorage.removeItem(key)
  },
  clear: () => {
    if(!browser) return
    localStorage.clear()
  }
};

export default (key: string, stores: { [key: string]: (Readable<unknown> | Writable<unknown>) }) => {
  const storedValue = LSManager.get(key);

  for(const [name, store] of Object.entries(stores)) {
    if('set' in store && storedValue && name in storedValue)
      store.set(storedValue[name])

    store.subscribe((value) => {
      const storedValue = LSManager.get(key);
      const newValue = { ...storedValue, [name]: value };
      LSManager.set(key, newValue);
    });
  }

  return {
    clear: () => {
      LSManager.remove(key);
    }
  }
};