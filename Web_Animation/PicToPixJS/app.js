// const image = document.getElementById('image-jh');
// window.onload = function initialize() {
//   pict2pix.animate({
//       image: image,
//       numberOfParticles: 800,
//       horizontalSpeed: 1,
//       verticalSpeed: -1,
//       particleType: 'twisted-particle'
//   });
// }

// const imagejh = document.getElementById('image-jh');

// window.onload = function initialize() {
//   pict2pix.animate({
//       image: imagejh,
//       particleType: 'straight-particle',
//       numberOfParticles: 800,
//       horizontalSpeed: -1,
//       verticalSpeed: -1,
//       direction: 'horizontal',

//   });
// }

const imagejh = document.getElementById('image-jh');

window.onload = function initialize() {
  pict2pix.animate({
      image: imagejh,
      particleType: 'led-matrix',
      type: 'random',
      transitionTime: 2000,
      idleTime: 3000,
      ledSize: 4
  });
}