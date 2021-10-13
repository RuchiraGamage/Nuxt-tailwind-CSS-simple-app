<template>
  <div class="footer-section">
    <div class="footer-section-inner-block">
      <div class="footer-content">
        <span class="footer-text"> Kostenlos Registrieren </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.footer-section-inner-block {
  @apply flex justify-center;
}

.footer-section {
  @apply opacity-100 fixed left-0 bottom-0 w-mobile;
  height: 128px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px -1px 3px #00000033;
  border-radius: 12px 12px 0px 0px;
}

.footer-content {
  @apply opacity-100 flex items-center justify-center;
  margin-top: 24px;
  width: 320px;
  height: 40px;
  background: transparent linear-gradient(95deg, #319795 0%, #3182ce 100%) 0% 0%
    no-repeat padding-box;
  border-radius: 12px;
}

.footer-text {
  @apply opacity-100 text-center;
  width: 320px;
  height: 17px;
  font: normal normal 600 14px/17px Lato;
  letter-spacing: 0.84px;
  color: #e6fffa;
}
</style>