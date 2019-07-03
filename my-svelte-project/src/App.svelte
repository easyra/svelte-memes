<script>
  export let github, linkedin, resume, email;
  import Nav from "./components/Nav.svelte";
  import About from "./components/About.svelte";
  import Portfolio from "./components/Portfolio.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<style>

</style>

<Nav {github} {resume} {linkedin} {email} />
<About {github} {resume} {linkedin} {email} />
<Portfolio />
<Footer {github} {resume} {linkedin} {email} />
