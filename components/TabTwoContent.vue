<template>
  <div class="content-body">
    <div class="content-sub-heading">
      Drei einfache Schritte zu deinem neuen Mitarbeiter
    </div>
    <InstructionFour />
    <InstructionFive />
    <InstructionSix />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content-body {
  @apply flex flex-col items-center;
}

.content-sub-heading {
  @apply text-center opacity-100 tracking-normal text-colour4;
  width: 280px;
  height: 50px;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 21px;
  font: normal normal medium 21px/25px Lato;
}
</style>
