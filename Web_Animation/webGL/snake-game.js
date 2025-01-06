// Get the canvas and WebGL context
const canvas = document.getElementById('gameCanvas');
const gl = canvas.getContext('webgl');

if (!gl) {
  alert('WebGL not supported');
}

// Game settings
const gridSize = 20;
const numCells = canvas.width / gridSize;

let snake = [{ x: 10, y: 10 }];
let direction = { x: 1, y: 0 };
let food = { x: Math.floor(Math.random() * numCells), y: Math.floor(Math.random() * numCells) };
let gameOver = false;

// Set up WebGL viewport and clear color
gl.viewport(0, 0, canvas.width, canvas.height);
gl.clearColor(0.9, 0.9, 0.9, 1.0);

// Main game loop
function gameLoop() {
  if (gameOver) return;

  updateSnake();
  checkCollision();
  render();

  setTimeout(gameLoop, 100); // Control game speed
}

// Update snake position
function updateSnake() {
  const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
  snake.unshift(head);

  // Check if snake ate the food
  if (head.x === food.x && head.y === food.y) {
    food = { x: Math.floor(Math.random() * numCells), y: Math.floor(Math.random() * numCells) };
  } else {
    snake.pop(); // Remove the last segment if no food eaten
  }
}

// Check for collisions
function checkCollision() {
  const head = snake[0];

  // Check wall collision
//   if (head.x < 0 || head.y < 0 || head.x >= numCells || head.y >= numCells) {
//     gameOver = true;
//     alert('Game Over! You hit the wall.');
//   }

  // Check self-collision
//   for (let i = 1; i < snake.length; i++) {
//     if (head.x === snake[i].x && head.y === snake[i].y) {
//       gameOver = true;
//       alert('Game Over! You hit yourself.');
//     }
//   }
}

// Render the game
function render() {
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Draw the snake
  snake.forEach(segment => {
    drawCell(segment.x, segment.y, [0, 0.5, 0]); // Green color
  });

  // Draw the food
  drawCell(food.x, food.y, [1, 0, 0]); // Red color
}

// Draw a single grid cell
function drawCell(x, y, color) {
  const x1 = (x / numCells) * 2 - 1;
  const y1 = (y / numCells) * 2 - 1;
  const x2 = ((x + 1) / numCells) * 2 - 1;
  const y2 = ((y + 1) / numCells) * 2 - 1;

  const vertices = new Float32Array([
    x1, y1,
    x2, y1,
    x2, y2,
    x1, y2
  ]);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

  const vertexShaderSource = `
    attribute vec2 aPosition;
    void main() {
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;

  const fragmentShaderSource = `
    precision mediump float;
    uniform vec4 uColor;
    void main() {
      gl_FragColor = uColor;
    }
  `;

  const vertexShader = createShader(gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

  const program = createProgram(vertexShader, fragmentShader);
  gl.useProgram(program);

  const positionLocation = gl.getAttribLocation(program, 'aPosition');
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

  const colorLocation = gl.getUniformLocation(program, 'uColor');
  gl.uniform4f(colorLocation, color[0], color[1], color[2], 1.0);

  gl.drawArrays(gl.TRIANGLE_FAN, 0, 4);
}

// Create a shader
function createShader(type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compilation error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }

  return shader;
}

// Create a program
function createProgram(vertexShader, fragmentShader) {
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error('Program linking error:', gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }

  return program;
}

// Handle keyboard input
window.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowUp':
      if (direction.y === 0) direction = { x: 0, y: 1 };
      break;
    case 'ArrowDown':
      if (direction.y === 0) direction = { x: 0, y: -1 };
      break;
    case 'ArrowLeft':
      if (direction.x === 0) direction = { x: -1, y: 0 };
      break;
    case 'ArrowRight':
      if (direction.x === 0) direction = { x: 1, y: 0 };
      break;
  }
});

// Start the game loop
gameLoop();
