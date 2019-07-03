<script>
  import Project from "./Project.svelte";
</script>

<style>
  .content {
    max-width: 1000px;
    width: 100%;
    margin: 15px auto;
  }
  h2 {
    font-size: 72px;
    text-align: right;
    border-bottom: 5px solid #db3e3e;
  }
  @media (max-width: 500px) {
    h2 {
      font-size: 50px;
      text-align: center;
    }
  }
</style>

<section class="portfolio">
  <div class="content">
    <h2>Portfolio</h2>
    <div class="projects">
      <Project
        title="Mappajob"
        imgLink="https://i.imgur.com/eT2NrrM.png"
        github="https://github.com/Lambda-School-Labs/Labs8-DeveloperMap"
        website="https://www.mappajob.com/"
        teamSize={4}
        summary="MappaJob is a map-based application geared towards helping job
        seekers find employers and vice-versa in a specific geographic area.
        This project was created by a team of four using a FERN stack consisting
        of the technologies: <strong>Firebase, Express.js, React, and
        Node.js.</strong> My responsibilities involved work in the both the
        <strong>front-end and back-end</strong> of this projects. Some of these
        responsibilities include designing a maintainable backend <strong>REST
        API,</strong> Implementing <strong>reusable React Components</strong>
        for interactive user experience, <strong>reviewing contributions and
        pull requests</strong> for the project and more." />
      <Project
        title="Lambda Notes"
        imgLink="https://i.imgur.com/TPdivrC.png"
        github=""
        summary="Lambda Notes is a note taking application that allows users to
        organize their information in an efficient manner. Users are able to
        post notes to a <strong>REST API</strong> and have those notes be
        displayed for everyone to see. Lambda Notes also has other features that
        create a more enjoyable experience for users such as support for
        <strong>premade themes,</strong> <strong>tagging</strong> support for
        notes, and the ability to search by note title or tag. I created this
        project using <strong>Reactjs, SQLite, Nodejs, and Expressjs.</strong> " />
    </div>
  </div>
</section>
