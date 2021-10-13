<template>
  <div class="box3">
    <div class="box3-inner">
      <span class="img3-text">3.</span>
      <span class="img3-description"
        >Vermittlung nach Provision oder Stundenlohn</span
      >
      <img class="img3" src="../assets/img/undraw_business_deal_cpi9.svg" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.box3 {
  @apply relative opacity-100;
  width: 411px;
  height: 326px;
  background: #f7fafc 0% 0% no-repeat padding-box;
  margin-bottom: 187px;
}

.box3-inner {
  position: inherit;
  margin-left: 54px;
  width: 299px;
  height: 327px;
  opacity: 1;
}

.img3 {
  @apply absolute right-0 bottom-0 opacity-100;
  width: 281px;
  height: 210px;
  background: transparent 0% 0% no-repeat padding-box;
}
.img3-text {
  @apply absolute top-0 left-0 text-center text-colour2 opacity-100 tracking-normal;
  width: 106px;
  height: 156px;
  font: normal normal normal 130px/156px Lato;
}
.img3-description {
  @apply absolute text-left text-colour2 opacity-100;
  top: 69px;
  left: 127px;
  width: 143px;
  height: 38px;
  text-align: left;
  font: normal normal normal 16px/19px Lato;
  letter-spacing: 0.47px;
}
</style>