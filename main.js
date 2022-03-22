const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      brand: "BEAMS",
      product: "リネンライク　ダブルジャケット　レディース",
      image: "./img/71U8fRqOPhL._AC_UL1500_.jpg",
      color: "MINT",
      inventory: 0,
      price: 8690,
      size: "",
      variants: [
        { id: 1000, color: "MINT", image: "./img/71U8fRqOPhL._AC_UL1500_.jpg" },
        {
          id: 2000,
          color: "NATURAL",
          image: "./img/71z6uPRUx1L._AC_UL1500_.jpg",
        },
      ],
      details: [
        "メイン素材:100％ポリエステル",
        "素材構成:100％ポリエステル",
        "原産国:中国製",
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },

    updateImage(variantImage) {
      this.image = variantImage;
    },

    updateColor(variantColor) {
      this.color = variantColor;
    },
  },
});
