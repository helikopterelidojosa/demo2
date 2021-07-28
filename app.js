let canvas = document.getElementById("myCanvas")
let cw = 400;
let ch = 400;
canvas.width = cw;
canvas.height = ch;
let ctx = canvas.getContext("2d")

ctx.fillRect(0,0,50,50);
ctx.fillRect(0,50,50,150);
ctx.fillRect(50,0,50,50);
ctx.fillRect(50,50,50,50);
ctx.fillRect(100,100,50,50);
