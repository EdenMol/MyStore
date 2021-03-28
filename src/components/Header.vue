<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" :to="{ name: 'home' }"
          >Home</router-link
        >
        <router-link class="navbar-brand" :to="{ name: 'buy' }"
          >Buy</router-link
        >
        <router-link class="navbar-brand" :to="{ name: 'sell' }"
          >Sell</router-link
        >
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li class="nav-item">
          <a href="#" @click="refresh">Refresh price</a>
        </li>
        <li
          class="nav-item dropdown"
          :class="{ open: isDropdownOpen }"
          @click="isDropdownOpen = !isDropdownOpen"
        >
          <a
            href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            >Save & Load<span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li><a @click="saveData">Save Data</a></li>
            <li><a @click="loadData">Load Data</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a @click="isDropdownOpen = false"
            ><strong>Buddget:{{ buddget }} </strong></a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  computed: {
    buddget() {
      return this.myBuddget(); //.toFixed(2);
    },
  },
  methods: {
    ...mapActions({
      randomPrice: "randomPrice",
      fetchData: "loadData",
    }),
    ...mapGetters({
      myBuddget: "buddget",
      myCoins: "coins",
      myCoinFollowup: "coinFollowup",
    }),
    refresh() {
      this.isDropdownOpen = false;
      this.randomPrice();
    },
    saveData() {
      const data = {
        buddget: this.myBuddget(),
        coins: this.myCoins(),
        followup: this.myCoinFollowup(),
      };
      axios.put("/coinsTrader.json", data);
    },
    loadData() {
      this.fetchData();
    },
  },
};
</script>
<style scoped>
a.navbar-brand.router-link-exact-active.router-link-active {
  color: rgb(178, 230, 173);
}
</style>