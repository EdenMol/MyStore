<template>
  <div>
    <h2>Wellcome!</h2>
    <h5>
      Click on <strong>"Refresh price"</strong> to refresh price of each coin,
      then go to <strong>"Buy"</strong> tab to buy some coins. <br />
      If you lucky, at <strong>"Sell"</strong> tab, you can sell the coin by
      higher price.
      <br />
      At <strong>"Save & Load"</strong> tab, you can load data from DB or save
      the data on DB.
    </h5>
    <hr />
    <h4>
      💰Your buddget is :<strong>{{ buddget + "$" }}</strong>
    </h4>
    <hr />
    <h4>Have a nice trade 💸</h4>
  </div>
</template>

<script>
export default {
  computed: {
    buddget() {
      return this.$store.getters.buddget;
    },
  },
};
</script>

<style>
</style>