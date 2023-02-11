const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.rect(50, 50, 100, 200);
ctx.rect(150, 150, 100, 200);
ctx.fill()

ctx.beginPath();
ctx.rect(250, 250, 100, 200);
ctx.rect(450, 450, 100, 200);
ctx.fillStyle = "blue";
ctx.fill()