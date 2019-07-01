import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'world',
    theme: {
      color1: '#CA2222',
      color2: '#DB3E3E',
      color3: '#F1C5C5',
      color4: '#F2F1F1',
      color5: '#0D0D0D'
    }
  }
});

export default app;
