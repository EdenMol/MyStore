<template>
  <div>
    <coin-single
      v-for="(coin, index) in data"
      :key="index"
      :value="value"
      :mode="mode"
      :coinData="coin"
      >{{ coin }}</coin-single
    >
  </div>
</template>

<script>
const MODE = 2;
import CoinSingle from "./CoinSingle.vue";
import { mapGetters } from "vuex";

export default {
  components: { CoinSingle },
  data() {
    return {
      value: "Sell",
      mode: MODE,
    };
  },
  computed: {
    ...mapGetters({ data: "coinFollowup" }),
  },
};
</script>

<style>
</style>