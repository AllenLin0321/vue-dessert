<template>
  <div class="hello">
    <a href="#" @click.prevent="singout">登出</a>
  </div>
</template>

<script>
export default {
  methods: {
    singout() {
      const api = `${process.env.VUE_APP_APIPATH}/logout`;
      const vm = this;
      this.$http.post(api).then(res => {
        // console.log(res.data);
        if (res.data.success) {
          vm.$router.push("/login");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
