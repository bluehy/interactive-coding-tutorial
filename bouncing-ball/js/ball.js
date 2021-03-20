export class Ball {
   constructor(stageWidth, stageHeight, radius, speed){
      // 원의 반지름
      this.radius = radius;
      // x와 y좌표값이 변하는 속도, 움직이는 속도
      this.vx = speed;
      this.vy = speed;

      // 원의 지름, 원의 크기
      const diameter = this.radius * 2;
      
      // 스테이지 위 랜덤하게 배치
      this.x = diameter + (Math.random() * stageWidth - diameter);
      this.y = diameter + (Math.random() * stageHeight - diameter);
   }

   // 원의 이동경로 그리기 함수
   draw(ctx, stageWidth, stageHeight) {
      this.x += this.vx;
      this.y += this.vy;

      this.bounceWindow(stageWidth, stageHeight);

      // 원의 사이즈와 생김새
      ctx.fillStyle = '#fdd700';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI );
      ctx.fill();
   }
   
   // 스테이지에 부딪혔을 때 튕겨나게 하는 함수
   bounceWindow(stageWidth, stageHeight) {
      /* x,y의 최소 최대값 - 스테이지상에 닿았는지를 판단하는 기준점으로 활용 */
      const minX = this.radius;
      const maxX = stageWidth - this.radius;
      const minY = this.radius;
      const maxY = stageHeight - this.radius;

      if (this.x <= minX || this.x >= maxX) {
         this.vx *= -1;
         this.x += this.vx;
      }else if (this.y <= minY || this.y >= maxY) {
         this.vy *= -1;
         this.y += this.vy;
      }
   }
}