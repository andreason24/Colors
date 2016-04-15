# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready ->
  c = document.getElementById('canvas')
  ctx = c.getContext('2d')

  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "#ADD8E6";
  ctx.textAlign = "center";
  ctx.fillText("Hello World", canvas.width/2, canvas.height/2);