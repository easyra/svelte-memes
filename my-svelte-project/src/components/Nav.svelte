<script>
  export let theme, email, resume, github, linkedin;
  let showMenu = false;
  import { fly, fade } from "svelte/transition";
</script>

<style>
  header {
    /* padding: 10px; */
    width: 100%;
    background: #ca2222;
    border-bottom: #f1c5c5 5px solid;
    color: #f2f1f1;
    text-transform: uppercase;
    position: fixed;
    top: 0;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
  }
  h1 {
    font-weight: bold;
    font-size: 24px;
    margin: 0 5px;
    cursor: pointer;
  }
  .nav-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 0;
    border-radius: 4px;
  }
  .menu {
    cursor: pointer;
    position: relative;
    padding: 15px;
  }
  .menu:hover {
  }
  .nav-item {
    padding: 15px;
    margin: 0 5px;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    background: #ca2222;
    width: 100%;
    text-decoration: none;
    text-align: center;
    transition: all 0.2s;
  }
  .nav-item:hover {
    background: #db3e3e;
  }
  .nav-item:active {
    background: #f1c5c5;
  }
</style>

<header>
  <nav>
    <h1 on:click={() => window.scrollTo(0, 0)}>Ezra Davis</h1>
    <i
      class="fas fa-bars fa-2x menu"
      on:click={() => (showMenu = !showMenu)}
      on:mouseover={() => (showMenu = true)}
      on:mouseleave={() => (showMenu = false)}>
      {#if showMenu}
        <div class="nav-items" transition:fly={{ x: 200, duration: 200 }}>
          <a href={github} class="nav-item">Github</a>
          <a href={linkedin} class="nav-item">Linkedin</a>
          <a href={resume} class="nav-item">Resume</a>
        </div>
      {/if}
    </i>

  </nav>
</header>
