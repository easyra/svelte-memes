<script>
  export let resume, github, linkedin;
</script>

<style>
  .about {
    display: flex;
    flex-direction: column;
    margin: 50px 0 0 0;
  }
  .content {
    width: 100%;
    max-width: 1000px;
    margin: 15px auto;
    display: flex;
    justify-content: space-between;
    /* flex-wrap: wrap; */
    align-items: center;
  }
  .img-container {
    max-width: 400px;
    padding: 15px;
    border-radius: 4px;
  }
  .img-container img {
    height: 100%;
  }
  .text {
    max-width: 500px;
    width: 100%;
    padding: 15px;
  }
  p {
    line-height: 2;
  }

  h1 {
    line-height: 1;
    font-size: 72px;
    margin: 0 0 15px 0;
  }

  .socials {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    color: #ca2222;
  }
  .link {
    margin: 0 25px 0 0px;
  }
  a {
    transition: all 0.2s;
  }
  a:hover {
    color: #db3e3e;
  }
  a:active {
    color: #f1c5c5;
  }
  @media (max-width: 800px) {
    h1 {
      text-align: center;
    }
    .content {
      flex-wrap: wrap;
      justify-content: center;
      flex-direction: column-reverse;
    }
    .socials {
      justify-content: space-around;
    }
    .link {
      margin: 0;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 50px;
    }
  }
</style>

<section class="about" name="top">

  <div class="content">
    <div class="text">
      <h1>Software Developer</h1>
      <p>
        The
        <strong>problem solving</strong>
        involved with working in the tech industry has always been it’s greatest
        pull. Being able to do just that professionally is something I’ll
        <strong>never regret working towards.</strong>
        If anyone reading this hears the voice of someone willing to
        <strong>give it there all,</strong>
        I hope we can
        <strong>work together</strong>
        and build something
        <strong>great!</strong>
      </p>
      <div class="socials">
        <a href={linkedin} class="link">
          <i class="fab fa-linkedin fa-5x" title="Linkedin" />
        </a>
        <a href={github} class="link">
          <i class="fab fa-github fa-5x" title="GitHub" />
        </a>
        <a href={resume} class="link">
          <i class="fas fa-file fa-5x" title="Resume" />
        </a>
      </div>
    </div>
    <div class="img-container">
      <img
        src="https://i.imgur.com/oq8VjZh.jpg"
        alt="Ezra Davis Software Developer" />

    </div>
  </div>

</section>
