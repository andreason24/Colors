var particle = {
	position: null,
	velocity: null,
	radius: null,
	color: null,

	create: function(x, y, speed, direction, color) {
		var obj = Object.create(this);
		obj.position = vector.create(x, y);
		obj.velocity = vector.create(0, 0);
		obj.radius = Math.random() * 5 + 3;
		obj.velocity.setLength(speed);
		obj.velocity.setAngle(direction);
		obj.color = color;
		return obj;
	},

	update: function() {
		this.position.addTo(this.velocity);
	}
};