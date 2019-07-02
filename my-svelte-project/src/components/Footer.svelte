<script>
  export let email, twitter, github, linkedin;
</script>

<style>
  footer {
    padding: 25px;
    background: #0d0d0d;
    color: #f2f1f1;
    border-bottom: 10px solid #f1c5c5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #f1c5c5;
    flex-wrap: wrap;
  }
  .link {
    margin: 0 10px 0 0px;
  }
  .socials {
  }

  .text {
    padding: 8px 0;
  }
</style>

<footer>
  <div class="text">
    <h2>
      <strong>Email:</strong>
       {email}
    </h2>
  </div>
  <div class="socials">
    <a href={github} class="link">
      <i class="fab fa-github fa-2x" />
    </a>
    <a href={linkedin} class="link">
      <i class="fab fa-linkedin fa-2x" />
    </a>
    <a href={twitter} class="link">
      <i class="fab fa-twitter fa-2x" />
    </a>

  </div>
</footer>
