import { readable, writable } from 'svelte/store';
import PSManager from './PersistedStoreManager';

const formatter = new Intl.DateTimeFormat(
  'pt-BR',
  {
    hour12: true,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  }
);

export const date = readable(formatter.format(new Date()),  (set) => {
	const interval = setInterval(() => {
    const date = new Date();
		set(formatter.format(date));
	}, 1000);

	return function stop() {
		clearInterval(interval);
	};
});

export const data = writable({
  picture: '',
  name: '',
  registration: '',
  institute: '',
  type: ''
})

export const psManager = PSManager('svelte-starter', { date, data });