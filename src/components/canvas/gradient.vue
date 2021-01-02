<template>
  <div class='bg'>
    <canvas id="myCanvas" width="600" height="600" style="border:1px solid #000000;"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Meet',
  methods: {
      paint: function () {
        var c=document.getElementById("myCanvas");
		var ctx=c.getContext("2d");
        // 创建渐变
		var grd=ctx.createRadialGradient(175,150,15,175,150,150);
		grd.addColorStop(0,"red");
		grd.addColorStop(1,"white");
		
		var nn=ctx.createRadialGradient(150,250,20,200,260,150);
		nn.addColorStop(0,"blue");
		nn.addColorStop(1,"white");
		// 填充渐变
		ctx.fillStyle=grd;
		ctx.fillRect(10,10,450,250);
		ctx.fillStyle = nn;
		ctx.fillRect(50,200,350,250);
		ctx.beginPath();
		ctx.arc(300,200,100,0,2*Math.PI,false);
		ctx.closePath();
		ctx.fillStyle = nn;
		ctx.fill();
      }
  },
  mounted: function () {
    this.paint();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  width: 100%;
}
.bg .goMeet {
    width: 20%;
    font-size: 2rem;
}
</style>
