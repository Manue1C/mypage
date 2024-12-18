import './app.css';
import App from './App.svelte';
import Rellax from 'rellax';

const app = new App({
  target: document.getElementById('app')!,
});

// Initialize Rellax after the DOM has loaded
document.addEventListener('DOMContentLoaded', () => {
  new Rellax('.rellax');
});

export default app;