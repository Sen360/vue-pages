<template>
  <div>
    I have a child component
    {{ message }}
    <input v-model="inputValue" />
    <button @click="addItem">Add</button>
    <ul>
      <li v-for="(todoValue, index) in todoList" :key="index">
        {{ todoValue.value }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ChildComponent",
  props: ["message"],
  computed: {
    ...mapGetters(["todoList"]),
  },
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    sendEvent() {
      this.$emit("pass-message", "Hi!");
    },
    addItem() {
      this.$store.dispatch("addItem", this.inputValue);
    },
  },
};
</script>

<style></style>
