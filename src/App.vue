<script setup lang="ts">
import {mapActions, storeToRefs} from "pinia"
import {useCounterStore} from "./stores/useCounter"

const main = useCounterStore();

const {counter, name } = storeToRefs(main);

function add(value: number){
  main.$patch({
    counter: counter.value + value
  })
}

function reset() {
  main.$reset();
}

// triggers when there is a mutation or state change
main.$subscribe((mutation, state)=> {
  console.log("mutation", mutation);
  console.log("state", state);
})

function change() {
  main.$state = {counter: 999, name: "Steff"}
}

</script>

<template>
  <p>Hello {{ name }}</p>
  <h4>{{ counter }}</h4>
  <!-- <button @click="main.addOne">Click me</button> -->
  <button @click="add(15)">Click me</button>
  <button @click="reset()">Reset</button>
  <button @click="change()">Change State</button>
</template>

<style scoped>

</style>
