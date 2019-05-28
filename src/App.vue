<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created() {
    const api = `${process.env.VUE_APP_APIPATH}/api/${
      process.env.VUE_APP_CUSTOMPATH
    }/products`;
    console.log(api);
    this.axios.get(api).then(response => {
      console.log(response.data);
    });
  }
};
</script>


<style lang="scss">
@import "./assets/main";
</style>
