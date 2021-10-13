<template>
  <div>
    <div class="main-tab-box">
      <ul
        class="tabs"
        :class="{ moveright: isActive('tab1'), moveleft: isActive('tab3') }"
      >
        <li
          id="tab1"
          class="tab"
          @click.prevent="setActive('tab1')"
          :class="{ active: isActive('tab1') }"
        >
          <span class="tab-text"> Arbeitnehmer </span>
        </li>
        <li
          class="tab"
          @click.prevent="setActive('tab2')"
          :class="{
            active: isActive('tab2'),
          }"
        >
          <span class="tab-text"> Arbeitgeber </span>
        </li>
        <li
          class="tab"
          @click.prevent="setActive('tab3')"
          :class="{ active: isActive('tab3') }"
        >
          <span class="tab-text"> Temporärbüro </span>
        </li>
      </ul>
    </div>
    <div>
      <div
        :class="{ 'active show': isActive('tab1'), hidden: !isActive('tab1') }"
      >
        <TabOneContent />
      </div>
      <div
        :class="{
          'active show': isActive('tab2'),
          hidden: !isActive('tab2'),
        }"
      >
        <TabTwoContent />
      </div>
      <div
        :class="{
          'active show': isActive('tab3'),
          hidden: !isActive('tab3'),
        }"
      >
        <TabThreeContent />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeItem: "tab1",
    };
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive(menuItem) {
      this.activeItem = menuItem;
    },
  },
};
</script>

<style lang="scss" scoped>
.moveleft {
  transform: translateX(-60px);
}
.moveright {
  transform: translateX(60px);
}
body {
  @apply p-0 m-0;
}

li:active li:hover li:visited > span {
  @apply bg-colour1 text-white;
}

.tabs {
  @apply flex justify-around list-none m-0 p-0 items-center overflow-hidden;
  transition: all 0.2s;
  border-radius: 3px;
}

.tab:hover {
  background-color: #81e6d9;
  color: #ffffff;
}

.main-tab-box {
  @apply flex items-center justify-center w-mobile  overflow-hidden h-10;
  margin: 20px auto;
}

.tab-text {
  width: 96px;
  height: 17px;
  font: normal normal 600 14px/17px Lato;
  letter-spacing: 0.84px;
  @apply text-center opacity-100 text-colour1;
}

.tab {
  width: 160px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #cbd5e0;
  @apply flex items-center justify-center opacity-100;
}
</style>