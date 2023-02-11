const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(190, 200, 15, 100);
ctx.fillRect(330, 200, 15, 100);
ctx.fillRect(240, 200, 60, 200);

ctx.arc(270, 140, 50, 0, 2*Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "white"
ctx.arc(255, 130, 7, Math.PI, 2*Math.PI);
ctx.arc(285, 130, 7, Math.PI, 2*Math.PI);
ctx.fill();