import './app.css';
import App from './App.svelte';
import Rellax from 'rellax';

const app = new App({
  target: document.getElementById('app')!,
});

// Initialize Rellax after the DOM has loaded with a slight delay
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    new Rellax('.rellax', {
      speed: -2,
      center: true,
    });
  }, 100); // 100ms delay
});

export default app;