(() => {
  const tau = Math.PI * 2;
  function leaf(ctx, x, y, length, angle, tint) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    const green = [
      ['#394526','#697749','#949b5d'],
      ['#495435','#7e874d','#a2a56b'],
      ['#2e4329','#58683d','#849354'],
    ][tint % 3];
    const wash = ctx.createLinearGradient(-length*.18, length*.47, length*.2, length*.54);
    green.forEach((color, i) => wash.addColorStop(i/2, color));
    ctx.fillStyle = wash;
    ctx.shadowColor = '#473b2e47';
    ctx.shadowBlur = length*.08;
    ctx.shadowOffsetY = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-length*.20,length*.22,-length*.17,length*.62,0,length);
    ctx.bezierCurveTo(length*.17,length*.62,length*.20,length*.22,0,0);
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
    ctx.strokeStyle = '#e5de9b67';
    ctx.lineWidth = .65;
    ctx.beginPath();
    ctx.moveTo(0, 1);
    ctx.bezierCurveTo(length*.09,length*.34,-length*.03,length*.68,0,length-2);
    for (const t of [.24,.38,.53,.67]) {
      ctx.moveTo(length*.035,length*(t+.08));
      ctx.lineTo(-length*.12,length*t);
      ctx.moveTo(length*.035,length*(t+.08));
      ctx.lineTo(length*.16,length*(t-.025));
    }
    ctx.stroke();
    ctx.restore();
  }

  function bloom(ctx, x, y, radius, tone, seed) {
    const palette = {
      yellow: ['#a86314','#dc920c','#f4c72e','#ffe575'],
      orange: ['#9d411b','#cf5316','#ee7e24','#ffc05e'],
      ivory: ['#a98b51','#e3cda3','#fff0cd','#fffdf0'],
    }[tone];
    const layers = tone === 'ivory' ? [1,.60] : [1,.77,.52,.28];
    ctx.save();
    ctx.translate(x,y);
    ctx.shadowColor = '#6b441d40';
    ctx.shadowBlur = 3;
    ctx.shadowOffsetY = 1.2;
    for (const [ring, size] of layers.entries()) {
      const count = tone === 'ivory' ? 5 : 12 - ring * 2;
      for (let i = 0; i < count; i++) {
        const angle = seed + i * tau / count + ring * .38;
        const r = radius * size * (.9 + .16 * Math.sin(i * 7.3 + seed * 2.5));
        ctx.save();
        ctx.rotate(angle);
        const wash = ctx.createLinearGradient(0,-r*.28,0,-r);
        wash.addColorStop(0,palette[ring === 0 ? 0 : 1]);
        wash.addColorStop(1,palette[2 + ((i + ring) % 3 === 0 ? 1 : 0)]);
        ctx.fillStyle = wash;
        ctx.beginPath();
        ctx.moveTo(0,-r*.15);
        ctx.bezierCurveTo(-r*.43,-r*.47,-r*.41,-r*.97,-r*.12,-r*.91);
        ctx.quadraticCurveTo(-r*.01,-r*1.09,r*.13,-r*.94);
        ctx.bezierCurveTo(r*.39,-r*.87,r*.34,-r*.48,0,-r*.15);
        ctx.fill();
        ctx.restore();
      }
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
    }
    ctx.fillStyle = tone === 'ivory' ? '#c98a24' : palette[1];
    ctx.beginPath();
    ctx.arc(0,0,radius*.10,0,tau);
    ctx.fill();
    ctx.restore();
  }

  function muggu(ctx,x,y,r,kind) {
    ctx.save();
    ctx.translate(x,y);
    const layers = kind==='lotus' ? 8 : kind==='diamond' ? 4 : 8;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.lineWidth = 1.35;
    for (let i=0;i<layers;i++) {
      ctx.rotate(tau/layers);
      ctx.strokeStyle = kind==='lotus' ? '#a46847' : '#9a704a';
      ctx.beginPath();
      ctx.moveTo(0,-r*.10);
      if(kind==='diamond') {
        ctx.lineTo(-r*.22,-r*.46);
        ctx.lineTo(0,-r*.94);
        ctx.lineTo(r*.22,-r*.46);
      } else {
        ctx.bezierCurveTo(-r*.32,-r*.42,-r*.23,-r*.73,0,-r*.91);
        ctx.bezierCurveTo(r*.23,-r*.73,r*.32,-r*.42,0,-r*.10);
      }
      ctx.closePath();
      ctx.fillStyle = i%2 ? '#d2974421' : '#ae73501c';
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0,-r*.24);
      ctx.quadraticCurveTo(-r*.20,-r*.53,0,-r*.69);
      ctx.quadraticCurveTo(r*.20,-r*.53,0,-r*.24);
      ctx.stroke();
      ctx.fillStyle = '#ad7849';
      for(const [dx,dy,dot] of [[0,-r*1.08,1.7],[-r*.25,-r*.83,1.2],[r*.25,-r*.83,1.2]]) {
        ctx.beginPath();
        ctx.arc(dx,dy,dot,0,tau);
        ctx.fill();
      }
    }
    ctx.beginPath();
    ctx.arc(0,0,r*.095,0,tau);
    ctx.stroke();
    ctx.restore();
  }

  function top(ctx,w,design) {
    const scale=w<440?.65:1;
    for(const mirror of [false,true]) {
      ctx.save();
      ctx.translate(mirror?w:0,0);
      ctx.scale(mirror?-scale:scale,scale);
      // Branches originate behind the flowers and fan into the page.
      const leaves=[
        [5,4,103,-1.43],[14,7,93,-1.08],[8,16,98,-.67],
        [7,23,89,-.24],[10,42,72,.05],[35,7,74,-1.24],
        [19,26,67,-.49],[52,9,60,-1.30]
      ];
      for(const [i,[x,y,length,angle]] of leaves.entries()){
        ctx.strokeStyle='#61743b';ctx.lineWidth=1.3;
        ctx.beginPath();ctx.moveTo(0,0);ctx.quadraticCurveTo(x*.5,y*.2,x,y);ctx.stroke();
        leaf(ctx,x,y,length,angle,i);
      }
      const flowers=[[6,7,23],[31,8,18],[13,32,18],[40,25,13],[7,55,12]];
      flowers.forEach(([x,y,r],i)=>bloom(ctx,x,y,r,i%2?'orange':'yellow',i*1.9));
      ctx.restore();
    }
  }

  function bottom(ctx,w,h,design) {
    const narrow=w<440;
    const r=narrow?29:43;
    for(const side of [-1,1]) {
      const x=side===-1 ? 18 : w-18;
      if(design==='classic') {
        muggu(ctx,x+side*8,h-27,r*1.55,'lotus');
        for(let i=0;i<3;i++) bloom(ctx,x-side*(i*11),h-8-i%2*6,6,i%2?'ivory':'yellow',i);
      }
    }

  }


  const canvas = document.querySelector('.celebrations-floral-backdrop');
  const ctx = canvas?.getContext('2d');
  if (!ctx) return;
  new ResizeObserver(([{contentRect: {width, height}}]) => {
    if (!width || !height) return;
    const ratio = Math.min(devicePixelRatio || 1, 2);
    canvas.width = Math.ceil(width * ratio);
    canvas.height = Math.ceil(height * ratio);
    ctx.scale(ratio, ratio);
    top(ctx, width, 'loose');
    bottom(ctx, width, height, 'classic');
  }).observe(canvas);
})();
