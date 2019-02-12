import { Component, OnInit } from "@angular/core";
import axios from "axios";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
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

  comments = {
    origin: "",
    items: []
  };

  commentInput = "";

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    for (var i = 0; i < this.petTypes.length; i++) {
      this.getPetInfo(i);
    }
    this.getComments();
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

  getComments() {
    axios
      .get(`/api-comments/`)
      .then(response => {
        this.comments = response.data;
      })
      .catch(() => {
        this.comments = { origin: "Error getting content", items: [] };
      });
  }

  async postComment() {
    const data = {
      text: this.commentInput
    };
    await axios.put(`/api-comments/`, data).catch(() => {
      this.comments = { origin: "Error getting content", items: [] };
    });
    this.commentInput = "";
    setTimeout(() => {
      this.getComments();
    }, 500);
  }

  displayDate(date: string) {
    return new Date(date).toLocaleString();
  }
}
