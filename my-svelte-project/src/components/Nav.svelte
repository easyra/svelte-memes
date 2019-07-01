<script>
  export let theme;
</script>

<style>
  header {
    padding: 10px;
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
    font-size: 20px;
    margin: 0 5px;
  }
  .nav-items {
    display: flex;
    align-items: center;
  }
  .nav-item {
    padding: 15px;
    margin: 0 5px;
  }
</style>

<header>
  <nav>
    <h1>Ezra Davis</h1>
    <div class="nav-items">
      <i class="fas fa-bars fa-2x" />
    </div>
  </nav>
</header>
