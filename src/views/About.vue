<template>
  <div class="about">
    {{ text }}
    <h1></h1>
    <hr/>
    <input v-model="val1" type="text" />
    + <input v-model="val2" type="text" />
    = <input v-model="valSum" type="text" />
  </div>
</template>

<script>
// @ is an alias to /src
import calc from '@/components/calc.js';

export default {
  name: 'about',
  data() {
    return {
      text: 'this page is pointlesss...!!!!',
      val1: 0,
      val2: 0,
      message: 'haha',
    };
  },
  computed: {
    valSum() {
      return calc(this.val1, this.val2);
    },
  },
};
</script>
