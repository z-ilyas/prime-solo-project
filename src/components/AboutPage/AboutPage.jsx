import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="aboutPageContainer">
      <div className="technologies">
        <h1>About</h1>
        <ul>These are the Technologies I used</ul>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>React</li>
          <li>Redux</li>
          <li>Saga</li>
          <li>Nide</li>
          <li>Express</li>
          <li>PostgresSQL</li>
          <li>SweetAlerts</li>
      </div>
      <div className='challenges'>
        <h1>Challenges</h1>
        <p>The biggest difficulty I had was trying to keep the app as simple as possible. 
          I wanted to highlight the simplicity of it and to keep it just as a journal with no extra distraactions</p>
      </div>
      <div className='futureGoals'>
        <h1>Goals</h1>
        <p>As for the foreseeable future. 
          I will add a data page that will help the user see how they have progressed over time with an exercise. 
          Setting PRs and many more. These features will be my main focus in the coming weeks. </p>
      </div>
    </div>
  );
}

export default AboutPage;
