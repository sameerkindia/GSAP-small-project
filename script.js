// gsap.to("#box-1", {
//   x: "1000px",
//   rotate: 360,
//   backgroundColor: "white",
//   transform: "translateY(500px)",
//   borderRadius: "100px",
//   duration: 1,
//   delay: 2,
// });

// gsap.from("#box-1", {
//   x: "1000px",
//   rotate: 360,
//   backgroundColor: "red",
//   transform: "translateY(500px)",
//   borderRadius: "100px",
//   duration: 1,
//   delay: 2,
// });

const tl = gsap.timeline();

tl.to("#box1", {
  x: 1000,
  rotate: 360,
  borderRadius: "100px",
  transform: "translateY(100px)",
  duration: 1,
  scale: 1.2,
  delay: 1,
});
tl.to("#box2", {
  x: 800,
  rotate: 360,
  borderRadius: "100px",
  transform: "translateY(100px)",
  scale: 1.2,
  duration: 1,
});
tl.to("#box3", {
  x: 1000,
  rotate: 360,
  borderRadius: "100px",
  transform: "translateY(100px)",
  scale: 1.2,
  duration: 1,
});
