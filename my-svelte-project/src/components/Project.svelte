<script>
  export let title, summary, imgLink, github, website;
</script>

<style>
  .project {
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
    padding: 15px;
  }
  .text {
    max-width: 450px;
    width: 100%;
  }
  .img-container {
    max-width: 450px;
  }
  h3 {
    font-size: 32px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
  }
  .link {
    margin-left: 10px;
    transition: all 0.2s;
    color: #ca2222;
  }
  .link:hover {
    color: #db3e3e;
  }
  .link:active {
    color: #f1c5c5;
  }
  p {
    line-height: 1.5;
  }
</style>

<div class="project">
  <div class="img-container">
    <img src={imgLink} alt={title} />
  </div>
  <div class="text">
    <h3>
       {title}
      <a href={github} class="link">
        <i class="fab fa-github" />
      </a>
      <a href={website} class="link">
        <i class="fas fa-wifi" />
      </a>

    </h3>
    <p>{summary}</p>
  </div>
</div>
