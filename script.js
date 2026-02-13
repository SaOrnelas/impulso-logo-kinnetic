const canvasSize = 500;
const grSize = canvasSize;
function setup() {
  createCanvas(canvasSize, canvasSize);
  frameRate(30);
  pg = createGraphics(grSize, grSize);
}

function draw() {
  background(255);
  //pg.clear();
  pg.fill(0);
  pg.clear();   // limpa o buffer pg para transparente [web:560]
  pg.textFont("Hind");
  pg.textSize(canvasSize/8.6);
  pg.push();
  pg.translate(grSize/2, grSize/2);
  pg.textAlign(LEFT, CENTER);
  pg.textLeading(canvasSize/6.6-10);
  pg.text("IMPULSO", -canvasSize/3.5, -canvasSize/5.25, 180);
  pg.pop();

  let tilesX = 105;
  let tilesY = 7;

  let tileW = int(width/tilesX);
  let tileH = int(height/tilesY);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {

      // WARP
      let wave = int(sin(frameCount * 0.04 + ( x * y ) * 0.09) * 30);
      //wave = 0;
      // SOURCE
      let sx = x*tileW + wave;
      let sy = y*tileH + wave* 1;
      let sw = tileW;
      let sh = tileH;


      // DESTINATION
      let dx = x*tileW;
      let dy = y*tileH;
      let dw = tileW;
      let dh = tileH;

      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);

    }
  }
}

// Savar como SVG quando clicamos sobre o canvas
function mouseClicked(){
  save(); // give file name
  // print("saved svg");
  // noLoop(); // we just want to export once
}