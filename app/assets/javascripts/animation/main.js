window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		particles = [],
		colors = ["#ff6666","#8080ff","#66ff66","#0000b3","#008080","#990000","#145214","#b36b00"," #ffff33"];
	update();

	// for(i=0;i < alpha.length; i++) {
 //        var o = {char: alpha[i],
 //             x: (width/7*i)|0,
 //             y: (height - 300)|0,
 //             size: (400)|0,
 //             font: fonts[((fonts.length - 1) * Math.random())|0]};
 //        ltrs.push(o);
 //    }



	function update() {
		context.clearRect(0, 0, width, height);

		if(particles.length < 1500) {
			color = colors[Math.floor(Math.random() * colors.length)];
			var p = particle.create( Math.random() * width , 0, Math.random() * 4 + 1, Math.PI / 2, color);
			particles.push(p);
		}


	 //    context.font="400px Arial";
		context.fillStyle = "#ffffff";
		// context.fillText("COLORS", 50, height - 300);
		context.fillRect(width/2, height/2, 150, 100);

		for(var i = 0; i < particles.length; i += 1) {
			var p = particles[i];
			p.update();

			context.beginPath();
			//make collision detection with text COLORS
			context.fillStyle = p.color
			if (p.position._y > height/2 + 100 || p.position._y <  200 ) {
			  	context.fillStyle = "#145214";
			}
			else {
				context.fillStyle = "#bfbfbf";
			}
			context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI * 2, false);
			context.fill();
			if(p.position.getY() - p.radius > height) {
				p.position.setY(0);
			}
		}
		requestAnimationFrame(update);
	}

};