<template>
  <div class="container">
    <!-- 左側に来る -->
    <div class="side__container">
      <Header />
      <Share />
    </div>

    <!-- 中央に来る -->
    <div class="main__container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
  @media screen and (min-width: 769px) {
    .container {
      flex-direction: row;
      margin: 0 auto;
      min-width: 1000px;
    }
    .main__container {
      flex-grow: 2;
      margin: 0 5rem;
    }
    .side__container {
      padding-top: 4rem;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      position: sticky;
      margin-left: 5rem;
      top: 0;
      height: 100vh;
      min-width: 400px;
    }
  }
</style>
