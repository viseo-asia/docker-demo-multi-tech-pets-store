<template>
  <div class="container" id="app">
    <h1>Pet Shop</h1>

    <button v-on:click="refresh" type="button" class="btn btn-secondary">Refresh</button>

    <div class="row">

      <div class="col-sm-6 col-md-4 col-lg-3" v-for="petType in petTypes" :key="petType.name">
        <div class="card card-pet">
          <div class="card-body">
            <h5 class="card-title">{{ petType.name }}</h5>
            <p>{{ petType.message }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "app",
  components: {},
  data: function() {
    return {
      petTypes: [
        { type: "cats", name: "Cats", message: "" },
        { type: "dogs", name: "Dogs", message: "" },
        { type: "rabbits", name: "Rabbits", message: "" },
        { type: "hamsters", name: "Hamsters", message: "" },
        { type: "parrots", name: "Parrots", message: "" },
        { type: "turtles", name: "Turtles", message: "" }
      ]
    };
  },
  created: function() {
    this.refresh();
  },
  methods: {
    refresh: function() {
      for (var i = 0; i < this.petTypes.length; i++) {
        this.getPetInfo(i);
      }
    },
    getPetInfo: function(index) {
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
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 2rem;
}

.card-pet {
  margin: 0.5rem;
}
</style>
