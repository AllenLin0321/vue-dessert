<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <h6
      class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
    >
      <span>管理員</span>
      <a class="d-flex align-items-center text-muted" href="#">
        <span data-feather="plus-circle"></span>
      </a>
    </h6>
    <ul class="nav flex-column mb-2">
      <li class="nav-item">
        <router-link to="/admin/products" class="nav-link">
          <i class="fas fa-box-open"></i>
          產品列表
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="#">
          <i class="far fa-list-alt">訂單列表</i>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="#">
          <i class="fas fa-ticket-alt">優惠券</i>
        </router-link>
      </li>
    </ul>

    <div class="sidebar-sticky">
      <h6
        class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"
      >
        <span>模擬訂單</span>
        <a class="d-flex align-items-center text-muted" href="#">
          <span data-feather="plus-circle"></span>
        </a>
      </h6>
      <ul class="nav flex-column mb-2">
        <li class="nav-item">
        <router-link class="nav-link" to="/customer_order">
          <i class="fas fa-ticket-alt">模擬訂單</i>
        </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
