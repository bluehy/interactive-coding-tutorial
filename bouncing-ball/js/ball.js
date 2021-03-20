export class Ball {
   constructor(stageWidth, stageHeight, radius, speed){
      // 원의 반지름
      this.radius = radius + 5;
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
   draw(ctx, stageWidth, stageHeight, block) {
      this.x += this.vx;
      this.y += this.vy;

      this.bounceWindow(stageWidth, stageHeight);

      // block 에서의 반사값 함수
      this.bounceBlock(block);

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
   
   // block과 닿았는지를 판단하는 기준점 계산, 튕겨나기 
   bounceBlock(block) {
      const minX = block.x - this.radius;
      const maxX = block.maxX + this.radius;
      const minY = block.y - this.radius;
      const maxY = block.maxY + this.radius;
      
      // block의 위아래, 양옆 어느쪽에 충돌했는지, 가까운 쪽을 판별해주는 함수
      if (this.x > minX && this.x < maxX && this.y > minY && this.y < maxY){
         const x1 = Math.abs(minX - this.x);
         const x2 = Math.abs(this.x - maxX);
         const y1 = Math.abs(minY - this.y);
         const y2 = Math.abs(this.y - maxY);
         
         // 양옆 중 가까운 곳, 위아래 중 가까운 곳 판별
         const min1 = Math.min(x1, x2);
         const min2 = Math.min(y1, y2);

         // 양옆과 위아래 중 가까운 곳 판별 - 수치가 작은 쪽이 가까운 곳
         const min = Math.min(min1, min2);

         // 튕겨나가는 함수
         if (min == min1) {
            this.vx *= -1;
            this.x += this.vx;
         } else if (min == min2) {
            this.vy *= -1;
            this.y += this.vy;
         }
      }
   }
}