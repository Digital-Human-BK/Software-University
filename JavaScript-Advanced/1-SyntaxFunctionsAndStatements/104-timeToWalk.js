function timeToWalk(steps, footprint, speed){
  let distance = (steps * footprint) / 1000;
  let time = (distance / speed);
  
  let h = Math.trunc(time);
  let m = (time % 1) * 60;
  let s = Math.round((m % 1) * 60);
  m = Math.trunc(m)

  let addMin = Math.trunc((steps * footprint) / 500);
  m+=addMin;

  h = h.toString();
  m = m.toString();
  s = s.toString()
  console.log(`${h.padStart(2, '0')}:${m.padStart(2, '0')}:${s.padStart(2, '0')}`);
}
timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)