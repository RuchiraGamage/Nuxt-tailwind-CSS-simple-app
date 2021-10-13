<template>
  <div class="main-box">
    <img class="img1" src="../assets/img/undraw_Profile_data_re_v81r.svg" />
    <span class="img1-text">1.</span>
    <span class="img1-description">Erstellen dein unternehmensprofil</span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.main-box {
  @apply relative opacity-100;
  width: 354px;
  height: 265px;
}

.img1 {
  @apply absolute top-0 opacity-100;
  right: 20px;
  width: 220px;
  height: 145px;
  background: transparent 0% 0% no-repeat padding-box;
}
.img1-text {
  @apply absolute left-0 bottom-0 opacity-100 text-center text-colour2 tracking-normal;
  width: 106px;
  height: 156px;
  font: normal normal normal 130px/156px Lato;
}
.img1-description {
  @apply absolute opacity-100 text-left text-colour2 tracking-normal;
  right: 20px;
  bottom: 33px;
  width: 183px;
  height: 19px;
  font: normal normal normal 16px/19px Lato;
  letter-spacing: 0.47px;
}
</style>