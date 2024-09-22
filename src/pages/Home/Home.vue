<template>
  <div class="home flex column middle center">
    <div class="content">
      <div class="flex middle" style="width: 400px">
        <h4>进度：</h4>
        <ElProgress
          class="flex-1"
          :percentage="80"
          :stroke-width="15"
          status="exception"
          striped
          striped-flow
          :duration="30"
        />
      </div>
      <ElButton type="primary" class="mt-30" size="large">create</ElButton>
    </div>
  </div>
</template>

<script setup lang="ts" name="">
import userStore from '@/store/userStore'

const { userInfo } = storeToRefs(userStore())

onMounted(() => {
  console.info('userInfo.value.id', userInfo.value?.id)
})
</script>

<style scoped lang="scss">
.home {
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #e6e6e6, #b7f0f7);
  .content {
    width: 400px;
    text-align: center;
    h1 {
      color: $theme-color;
      font-size: 60px;
      font-weight: 700;
    }
  }
}
</style>
