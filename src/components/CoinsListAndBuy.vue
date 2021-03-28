<template>
  <div>
    <coin-single
      v-for="(coin, index) in coins"
      :key="index"
      :value="value"
      :mode="mode"
      :coinData="coin"
      >{{ coin }}</coin-single
    >
  </div>
</template>

<script>
import CoinSingle from "./CoinSingle.vue";
import { mapGetters } from "vuex";

const MODE = 1;
export default {
  components: { CoinSingle },
  data() {
    return {
      mode: MODE,
      value: "Buy",
    };
  },
  computed: {
    ...mapGetters({ coins: "coins" }),
  },
};
</script>

<style>
</style>