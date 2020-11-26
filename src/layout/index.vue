<template>
  <el-container>
    <el-header class="header">
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <NavMenu></NavMenu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from '@/layout/components/NavMenu'
import Header from '@/layout/components/Header'

export default {
  name: 'Layout',
  components: {
    NavMenu,
    Header
  }
}
</script>
<style lang="scss">
.header {
  background-color: #1b5fa8;
  color: #fff;
  line-height: 60px;
}
</style>
