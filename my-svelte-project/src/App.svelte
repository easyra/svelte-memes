<script>
  export let github, linkedin, twitter, email;
  import Nav from "./components/Nav.svelte";
  import About from "./components/About.svelte";
  import Portfolio from "./components/Portfolio.svelte";
  import Footer from "./components/Footer.svelte";
</script>

<style>

</style>

<Nav />
<About />
<Portfolio />
<Footer {github} {twitter} {linkedin} {email} />
