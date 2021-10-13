<template>
  <div class="sectionIntro">
    <div class="intro-title">Deine Job website</div>
    <img class="intro-img" src="../assets/img/undraw_agreement_aajr.svg" />
    <img src="../assets/img/wave.svg" alt="" class="background-wave" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.background-wave {
  @apply relative left-0;
  bottom: 20px;
}
.into-content {
  @apply items-center;
}
.sectionIntro {
  @apply flex flex-col items-center opacity-100 w-mobile;
  height: 659px;
  background: transparent linear-gradient(141deg, #ebf4ff 0%, #e6fffa 100%) 0%
    0% no-repeat padding-box;
}

.intro-title {
  @apply text-center opacity-100 text-colour3;
  padding-top: 90px;
  width: 320px;
  height: 210px;
  font-size: 42px;
  font: normal normal medium 42px/50px Lato;
  letter-spacing: 1.26px;
}

.intro-img {
  @apply opacity-100 w-mobile;
  height: 405px;
  background: transparent 0% 0% no-repeat padding-box;
}
</style>