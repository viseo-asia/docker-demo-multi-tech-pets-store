import React, { Component } from "react";
import "./App.css";
import * as axios from  "axios";

class App extends Component {
  state = { petTypes: [
    { type: "cats", name: "Cats", message: "" },
    { type: "dogs", name: "Dogs", message: "" },
    { type: "rabbits", name: "Rabbits", message: "" },
    { type: "hamsters", name: "Hamsters", message: "" },
    { type: "parrots", name: "Parrots", message: "" }
  ] };

  refresh() {
    for (var i = 0; i < this.state.petTypes.length; i++) {
      this.getPetInfo(i);
    }
  }

  componentDidMount() {
    this.refresh();
  }

  getPetInfo(index) {
    axios
      .get(`/api-${this.state.petTypes[index].type}/`)
      .then(response => {
        this.setState((state) => {
          state.petTypes[index].message = response.data;
          return { petTypes: state.petTypes };
        });
      })
      .catch(() => {
        this.setState((state) => {
          state.petTypes[index].message = "Error gettting content.";
          return { petTypes: state.petTypes };
        });
      });
  }
  
  render() {
    var petTypes = [
      { type: "cats", name: "Cats", message: "" },
      { type: "dogs", name: "Dogs", message: "" },
      { type: "rabbits", name: "Rabbits", message: "" },
      { type: "hamsters", name: "Hamsters", message: "" },
      { type: "parrots", name: "Parrots", message: "" }
    ];

    return (
      <div className="container" id="app">
        <h1>Pet Shop</h1>

        <button onClick={() => this.refresh()} type="button" className="btn btn-secondary">Refresh</button>

        <div className="row">

          {petTypes.map((petType, index) => 
            <div key={petType.type} className="col-sm-6 col-md-4 col-lg-3">
              <div className="card card-pet">
                <div className="card-body">
                  <h5 className="card-title">{ petType.name }</h5>
                  <p>{ this.state.petTypes[index].message }</p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    );
  }
}

export default App;
