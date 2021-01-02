import React from "react";
import logo from "./logo.svg";
import "./App.css";

// import './assets/bootstrap/css/bootstrap.min.css';
// import './assets/css/odometer-theme-default.css';
// import './assets/css/style.css';
// import './assets/css/owl.carousel.min.css';
import './styles/styles.css';

function App() {
  return (    
    <div>
      <script src="./src/jscode.js"></script>
      <section class="et-hero-tabs">
        <h1>Hi, I'm Christian Mitton</h1>
        <h3>Software developer, Rutgers New Brunswick CS Graduate</h3>
        <div class="et-hero-tabs-container">
          <a class="et-hero-tab" href="#tab-es6">ES6</a>
          <a class="et-hero-tab" href="#tab-flexbox">Flexbox</a>
          <a class="et-hero-tab" href="#tab-react">React</a>
          <a class="et-hero-tab" href="#tab-angular">Angular</a>
          <a class="et-hero-tab" href="#tab-other">Other</a>
          <span class="et-hero-tab-slider"></span>
        </div>
      </section>

      <main class="et-main">
        <section class="et-slide" id="tab-es6">
          <h1>ES6</h1>
          <h3>something about es6</h3>
        </section>
        <section class="et-slide" id="tab-flexbox">
          <h1>Flexbox</h1>
          <h3>something about flexbox</h3>
        </section>
        <section class="et-slide" id="tab-react">
          <h1>React</h1>
          <h3>something about react</h3>
        </section>
        <section class="et-slide" id="tab-angular">
          <h1>Angular</h1>
          <h3>something about angular</h3>
        </section>
        <section class="et-slide" id="tab-other">
          <h1>Other</h1>
          <h3>something about other</h3>
        </section>
      </main>
    </div>
  );
}



// function App() {
//   return (      
    // <div className="App">
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          TEST
        </a>
      </header> */
    // </div>
//   );
// }

export default App;
