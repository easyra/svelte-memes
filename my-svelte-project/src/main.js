import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    name: 'world',
    github: 'https://github.com/easyra',
    linkedin: 'https://www.linkedin.com/in/ezra-davis/',
    twitter: 'https://twitter.com/ezradavisdev',
    email: 'ezra.rr.davis@gmail.com',
    resume:
      'https://drive.google.com/open?id=1wcAi03wZGLtG7yTJDQon32WLMwyf3DCoSAE_Di1E0RE',
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
