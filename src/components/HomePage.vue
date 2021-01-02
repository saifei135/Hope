<template>
  <div class = 'homepage'>
    <el-container>
      <el-header>纸上得来终觉浅，绝知此事要躬行</el-header>
        <el-container>
          <el-aside width="16%">
            <el-menu default-active="2" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
            <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-grape"></i>
                  <span>HTML</span>
                </template>
                <el-menu-item-group>
                <template slot="title">Canvas</template>
                  <el-menu-item index="1-1" route='/canvas/gradient'>渐变色</el-menu-item>
                  <el-menu-item index="1-2" route='/canvas/adf'>测试</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span slot="title">3D</span>
              </template>
              <el-menu-item-group>
                <template slot="title">鼠标事件</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-video-camera-solid"></i>
                <span slot="title">CSS动画</span>
              </template>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-orange"></i>
                <span slot="title">JavaScript</span>
              </template>
            </el-submenu>
            </el-menu>
          </el-aside>
          <el-main><router-view></router-view></el-main>
      </el-container>
      <el-footer>千里之行，始于足下</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
      return {}
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html,body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .homepage {
    height: 100%;
    width: 100%;
  }
  .el-header, .el-footer {
    background-color: #696969;
    color: #ffffff;
    font-size: 2rem;
    line-height: 4rem;
  }
  .el-footer {
      position: absolute;
      width: 100%;
      bottom: 0;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 52rem;
  }
  .el-aside::-webkit-scrollbar {/*滚动条整体样式*/
	width: 8px;     /*高宽分别对应横竖滚动条的尺寸*/
	height: 4px;
	scrollbar-arrow-color:red;

}
.el-aside::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
	border-radius: 5px;
	-webkit-box-shadow: inset 0 0 5px rgba(1,0,0,0.2);
	background: rgba(1,0,0,0.1);
	scrollbar-arrow-color:red;
}
.el-aside::-webkit-scrollbar-track {/*滚动条里面轨道*/
	-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
	border-radius: 5px;
	background: rgba(1,1,0,0.1);
}
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 52rem;
  }
</style>
