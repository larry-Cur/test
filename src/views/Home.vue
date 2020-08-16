<template>
  <el-container>
    <el-header>
      <span>10k</span>
      <el-button v-show="reindex">回到首页</el-button>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
  data(){
    return{
      reindex:false,
    }
  }
};
</script>
<style lang="less" scoped>
@base: #009900;
.el-header {
  text-align: center;
  background: @base;
  font-size: 40px;
  line-height: 50px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  .el-button {
    font-size: 18px;
    background: #14b637;
    border: none;
    color: #fff;
    font-weight: bold;
  }
}
</style>
