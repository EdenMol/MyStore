<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ coinData.name }}
          <small>(Price:{{ coinData.price }} {{ checkQuantity() }})</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            type="number"
            class="form-control"
            placeholder="Quantity"
            v-model.number="quantity"
            :class="{ danger: checkBuddget }"
          />
        </div>
        <div class="pull-right">
          <input
            type="button"
            v-model="btnName"
            :class="setColor"
            @click="tradeCoins"
            :disabled="
              checkBuddget || quantity <= 0 || !Number.isInteger(quantity)
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["value", "mode", "coinData"],
  data() {
    return {
      btnValue: this.value,
      quantity: null,
    };
  },
  methods: {
    ...mapActions(["buyCoin", "sellCoin"]),

    checkQuantity() {
      return this.coinData.quantity
        ? " | Quantity: " + this.coinData.quantity
        : "";
    },
    tradeCoins() {
      const order = {
        coinId: this.coinData.id,
        coinPrice: +this.coinData.price,
        quantity: this.quantity,
      };

      if (this.mode === 1) {
        this.buyCoin(order);
      } else {
        this.sellCoin(order);
      }
      this.quantity = null;
    },
  },
  computed: {
    ...mapGetters({ myBuddget: "buddget" }),
    checkBuddget() {
      if (this.mode != 1) {
        return this.quantity > this.coinData.quantity;
      } else {
        return this.quantity * this.coinData.price > this.myBuddget;
      }
    },
    btnName() {
      if (this.mode != 1) {
        return this.checkBuddget ? "Too much" : this.btnValue;
      } else {
        return this.checkBuddget ? "Insufficient" : this.btnValue;
      }
    },
    setColor() {
      if (this.mode === 1) {
        return "btn btn-success";
      } else {
        return "btn btn-primary";
      }
    },
  },
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
.form-control {
  width: 50%;
}
</style>