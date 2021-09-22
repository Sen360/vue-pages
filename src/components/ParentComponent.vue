<template>
  <div>
    I am a parent component {{ $route.params.id }}
    <button @click="goBack">Go Home</button>
    <ChildComponent :message="message" @pass-message="parseChildMessage" />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent";

export default {
  name: "ParentComponent",
  components: {
    ChildComponent,
  },
  data() {
    return {
      message: "Hello!",
    };
  },
  methods: {
    parseChildMessage(message) {
      alert("Hi ! The child component says: " + message);
    },
    goHome() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style></style>
