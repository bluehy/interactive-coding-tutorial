export class Block {
   constructor(width, height, x, y) {
      // block 가로세로 사이즈
      this.width = width;
      this.height = height;
      // 원점 위치
      this.x = x;
      this.y = y;
      // ball을 추적하기 위해 maximum값 정의
      this.maxX = width + x;
      this.maxY = height + y;
   }

   // 실제로 그려지는 블록
   draw(ctx) {
      const xGap = 80;
      const yGap = 60;

      ctx.fillStyle = "#ff384e";
      ctx.beginPath();
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.fill();

      // shadow - bottom
      ctx.fillStyle = '#190f3a';
      ctx.beginPath();
      ctx.moveTo(this.maxX, this.maxY);
      ctx.lineTo(this.maxX - xGap, this.maxY + yGap);
      ctx.lineTo(this.x - xGap, this.maxY + yGap);
      ctx.lineTo(this.x, this.maxY);
      ctx.fill();

      // shadow - left
      ctx.fillStyle = '#9d0919';
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.x, this.maxY);
      ctx.lineTo(this.x - xGap, this.maxY + yGap);
      ctx.lineTo(this.x - xGap, this.maxY + yGap - this.height);
      ctx.fill();
   }
}