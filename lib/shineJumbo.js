var config = new shinejs.Config({
      numSteps: 5,
      opacity: 0.5,
      shadowRGB: new shinejs.Color(0, 0, 0)
    });

    var shine = new shinejs.Shine(document.getElementById('shineJumbo'), config);

    function handleMouseMove(event) {
      shine.light.position.x = event.clientX;
      shine.light.position.y = event.clientY;
      shine.draw();
    }

    window.addEventListener('mousemove', handleMouseMove, false);
