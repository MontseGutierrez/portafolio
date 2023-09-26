
let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color:#d66e73;">Biotecnóloga especializado en la industria farmaceútica y de alimentos.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
