import React from 'react';
import './App.css';

function App() {
    const [nameValue, setNameValue] = React.useState("");
    const [ageValue, setAgeValue] = React.useState(0);
  return (
      <div>

          <form className="gegevens-formulier">
              <h2>Gegevens</h2>
              <label htmlFor="name">
                  Naam:
                  <input
                      type="text"
                      placeholder="Vul hier je naam in."
                      name="name"
                      value={nameValue}
                      onChange={(e) => setNameValue(e.target.value)}
                  />
              </label>
              <label htmlFor="age">
                  Leeftijd:
                  <input
                    type="number"
                    name="age"
                    value={ageValue}
                    onChange={(e) => setAgeValue(e.target.value)}
                  />
              </label>
          </form>
          <form className="review">
              <h2>Jouw review</h2>
              <lable htmlFor="found">
                  Hoe heb je dit recept gevonden?

              </lable>
          </form>
      </div>
  );
}

export default App;
