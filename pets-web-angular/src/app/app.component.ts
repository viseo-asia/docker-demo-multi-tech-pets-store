import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  petTypes = [
    { type: "cats", name: "Cats", message: "" },
    { type: "dogs", name: "Dogs", message: "" },
    { type: "rabbits", name: "Rabbits", message: "" },
    { type: "hamsters", name: "Hamsters", message: "" },
    { type: "parrots", name: "Parrots", message: "" },
    { type: "turtles", name: "Turtles", message: "" }
  ];

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    for (var i = 0; i < this.petTypes.length; i++) {
      this.getPetInfo(i);
    }
  }

  getPetInfo(index: number) {
    axios
      .get(`/api-${this.petTypes[index].type}/`)
      .then(response => {
        this.petTypes[index].message = response.data;
      })
      .catch(() => {
        this.petTypes[index].message = "Error gettting content.";
      });
  }

}
