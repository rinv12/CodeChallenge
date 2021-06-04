import "./styles.css";
import data from "./data";
import { HashRouter, Route } from "react-router-dom";
import Card from "./card";

// Instructions!
// 1. Fork this project!
// 2. Create a Card component in the src folder
// 3. The Card component should take in a name, animal, and age and display those as an h2, h3, and p tags respectively
// 4. Map over the data array that's being imported on line 2, and return a Card component for each one
// 5. Add the Cards to the return statement in the App component so that they're displayed in the browser
// 6. Add some basic styling to the Cards

export default function App() {
  return (
    <div className="App">
      <h1>MacroMenu FE Code Challenge</h1>
      <section>
        <HashRouter>
          <div>
            <Route exact path="/" render={() => <Card />} />
          </div>
        </HashRouter>
      </section>
    </div>
  );
}
