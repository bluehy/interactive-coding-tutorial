import {
   Ball
} from './ball.js';

import {
   Block
} from './block.js';

// class App
class App {
   constructor() {
      this.canvas = document.createElement('canvas');
      this.ctx = this.canvas.getContext('2d');

      document.body.appendChild(this.canvas);
      
      // screen size를 가져와주는 장치를 먼저.
      window.addEventListener('resize', this.resize.bind(this), false);
      this.resize();

      // ball, block
      this.ball = new Ball(this.stageWidth, this.stageHeight, 30, 15);
      this.block = new Block(500, 30, 300, 300);

      window.requestAnimationFrame(this.animate.bind(this));
   }  

   // screen size 가져오는 함수
   resize() {
      this.stageWidth = document.body.clientWidth;
      this.stageHeight = document.body.clientHeight;

      this.canvas.width = this.stageWidth * 2;
      this.canvas.height = this.stageHeight * 2;
      this.ctx.scale(2, 2);
   }

   // animation 구동함수
   animate (t) {
      window.requestAnimationFrame(this.animate.bind(this));

      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

      // block, ball 그리기
      this.block.draw(this.ctx);
      this.ball.draw(this.ctx, this.stageWidth, this.stageHeight, this.block);
   }
}

window.onload = () => {
   new App();
}