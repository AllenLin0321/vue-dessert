<template>
  <div>
    <!-- Navigation Bar -->
    <Navbar/>
    <AlertMessage/>
    <div class="container-fluid">
      <div class="row">
        <!-- Side Bar -->
        <Sidebar/>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <router-view/>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AlertMessage from "./AlertMessage";


export default {
  components: {
    Navbar,
    Sidebar,
    AlertMessage
  }
};
</script>
