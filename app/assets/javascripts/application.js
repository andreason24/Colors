// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery
//= require bootstrap-sprockets
//= require_tree .

function emit(canvasId)
{
    var NUM_POINTS = 150;
    var canvas = document.getElementById(canvasId);
    var context = canvas.getContext("2d");

    var points = [],
        width = canvas.width,
        height = canvas.height,
        interval;

    var gravity = .05;

    var emitter = { x: randBtwn(0, width), y: randBtwn(0, height) };


    function randBtwn(min, max)
    {
        return min + (max - min) * Math.random();
    }

    function resetPoint(p)
    {
        p.x  = width/2;
        p.y  = 5;
        p.vY = randBtwn(-3, 5);
        p.vX = randBtwn(-3, 5);
        p.radius = randBtwn(3, 6);
    }

    function initPoint()
    {
        var p = { };
        resetPoint(p);
        return p;
    }

    function addPoint()
    {
        if(points.length < NUM_POINTS)
            points.push(initPoint());
    }

    var circRadius = 4;//pix
    function draw()
    {
        context.clearRect(0, 0, width, height);
        var point, i;
        for(i = 0; i < points.length; i++)
        {
            point = points[i];
            context.beginPath(point.x, point.y);
            context.fillStyle = "red";
            context.arc(point.x, point.y, point.radius, 0, 2*Math.PI);
            context.fill();
        }
    }

    function move(t)
    {
        points.forEach(function(point)
        {
            if((point.y > (height - point.radius) || point.y < point.radius)
                ||
                (point.x > (width - point.radius) || point.x < point.radius))
            {
                resetPoint(point);
            }
            point.vY += gravity;

            point.x += point.vX;
            point.y += point.vY;
        });
    }
    return {
        'start': function() {
            var start = new Date();

            points = [];
            window.clearInterval(interval);
            interval = window.setInterval(function(){ addPoint(); move(new Date() - start); draw(); }, 1000/30);
        },
        'stop': function() {
            window.clearInterval(interval);
        }
    };

}