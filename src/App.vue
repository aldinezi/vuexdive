<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div>
          {{ fullname }}
          <input
            type="text"
            :value="inputText"
            @keyup="setInput"
            @keydown.enter="setName"
            placeholder="Your name" />
          <div>
            <span v-if="inputText!==''">
              Hello {{ inputText }}
            </span>
          </div>
          <div>
            <button
              @click="getSomeSpaceships"
            >Get Spaceships!</button>
          </div>
        </div>
      </div>
      <hr>
      <div class="row">
        <div
          class="column column-50 starships"
          v-if="starships.length">
          <ul class="ship-list">
            <li v-for="starship in starships"
                :key="starship.url">
              <button
                class="button-large button-black button-outline "
                @click="setMyShip(starship.url)">
                {{ starship.name }}
              </button>
            </li>
          </ul>
        </div>
        <div
          v-if="myShip.name"
          class="column collumn-50 my-ship">
          <small>
            <a>Cost in credits: {{ myShip.cost_in_credits }}</a>
          </small>
          <h1>{{ myShip.name }}</h1>
          <small>Manufacturer: {{ myShip.manufacturer }}</small><br/>
          <small>Model: {{ myShip.model }}</small><br/>
          <u>Starship class: {{ myShip.starship_class }} </u><br/>
          <strong>Hyperdrive rating: {{ myShip.hyperdrive_rating }} </strong><br>
          <em>Cargo capacity: {{ myShip.cargo_capacity }} </em>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      inputText: '',
    };
  },
  components: {
  },
  computed: {
    ...mapGetters({
      getName: 'getName',
      getSurname: 'getSurname',
    }),
    fullname() {
      return `${this.getName} ${this.getSurname}`;
    },
    starships() {
      return this.$store.getters.starships;
    },
    myShip() {
      return this.$store.getters.myShip;
    },
  },
  methods: {
    setInput(e) {
      this.inputText = e.target.value;
    },
    setName() {
      this.$store.dispatch('setName', this.inputText);
    },
    getSomeSpaceships() {
      this.$store.dispatch('getStarships');
    },
    setMyShip(shipUrl) {
      this.$store.dispatch('setMyShip', shipUrl);
    },
  },
};
</script>

<style>
.container .column.starships {
  text-align: left;
  padding-left: 0;
}
.starships .ship-list {
  list-style: none;
}
</style>
