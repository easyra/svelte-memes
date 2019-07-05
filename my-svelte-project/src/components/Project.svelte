<script>
  export let title, summary, imgLink, github, website, teamSize;
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
    /* margin-bottom: 5px; */
    display: flex;
    align-items: center;
    /* position: relative; */
  }
  h4 {
    /* margin: 0 0 0 5px; */
    color: #db3e3e;
    font-size: 16px;
    font-style: italic;
    font-weight: bold;
    /* position: absolute; */
    /* right: 0; */
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
  @media (max-width: 800px) {
    .project {
      flex-wrap: wrap;
    }
  }
</style>

<div class="project">
  <div class="img-container">
    <img src={imgLink} alt={title} />
  </div>
  <div class="text">
    <h3>
       {title}
      {#if github}
        <a href={github} class="link">
          <i class="fab fa-github" title="Project Repo" />
        </a>
      {/if}
      {#if website}
        <a href={website} class="link">
          <i class="fas fa-wifi" title="Deployed Site" />
        </a>
      {/if}
    </h3>
    {#if teamSize && teamSize > 1}
      <h4>Team of {teamSize}</h4>
    {/if}
    <p>
      {@html summary}
    </p>

  </div>
</div>
