<template>
  <div id="app">
    {{ getName }} {{ getSurname }}
    {{ fullname }}
    <div>
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
  },
  methods: {
    setInput(e) {
      this.inputText = e.target.value;
    },
    setName() {
      this.$store.dispatch('setName', this.inputText);
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
