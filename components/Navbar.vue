<template>
  <div class="navbar-section">
    <div class="top-border"></div>
    <div class="nav">
      <div class="login-btn">
        <span class="login-text">Login</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar-section {
  @apply flex flex-col;
}
.login-btn {
  @apply flex justify-start items-center mr-1;
}
.login-text {
  width: 39px;
  font: normal normal 600 14px/17px Lato;
  @apply mr-10 text-colour1 opacity-100 tracking-wider font-semibold h-5;
}
.nav-items {
  @apply flex justify-end items-center flex-grow;
}

.nav {
  z-index: 1000;
  top: 5px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 0px 0px 12px 12px;

  @apply flex justify-end items-center opacity-100 fixed left-0 h-16 w-mobile;
}

.top-border {
  height: 5px;
  background: transparent linear-gradient(91deg, #319795 0%, #3182ce 100%) 0% 0%
    no-repeat padding-box;
  @apply opacity-100 absolute top-0 left-0 w-mobile;
}
</style>



