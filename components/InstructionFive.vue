<template>
  <div class="box2">
    <div class="box2-inner">
      <span class="im2-text">2.</span>
      <span class="im2-description">Erstellen ein Jobinserat</span>
      <div class="img2">
        <img src="../assets/img/undraw_about_me_wa29.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box2 {
  @apply relative opacity-100 w-mobile;
  height: 370px;
  background: transparent linear-gradient(134deg, #e6fffa 0%, #ebf4ff 100%) 0%
    0% no-repeat padding-box;
}

.img2 {
  @apply absolute opacity-100 bottom-0;
  top: 155.09px;
  left: 77.26px;
  height: 127px;
  background: transparent 0% 0% no-repeat padding-box;
}
.im2-text {
  @apply absolute top-0 left-0 opacity-100 text-colour2 tracking-normal text-center;
  width: 106px;
  height: 156px;
  font: normal normal normal 130px/156px Lato;
}
.im2-description {
  @apply absolute opacity-100 text-colour2 text-left;
  left: 127px;
  top: 110px;
  width: 183px;
  height: 19px;
  font: normal normal normal 16px/19px Lato;
  letter-spacing: 0.47px;
}

.box2-inner {
  position: inherit;
  width: 310px;
  height: 261.64px;
  opacity: 1;
  margin-left: 35px;
  margin-top: 26.94px;
}
</style>