if (typeof registerPaint !== 'undefined') {
    class CircularBorder {
      static get inputProperties() {
        return ['--angle', '--c1', '--c2'];
      }
  
      paint(ctx, geom, properties) {
        const angle = parseFloat(properties.get('--angle').toString()) || 0;
        const color1 = properties.get('--c1').toString() || 'rgba(168, 239, 255, 1)';
        const color2 = properties.get('--c2').toString() || 'rgba(168, 239, 255, 0.1)';
  
        // Draw circular gradient border
        const radius = Math.min(geom.width, geom.height) / 2;
        const gradient = ctx.createConicGradient(angle, geom.width / 2, geom.height / 2);
        gradient.addColorStop(0, color1);
        gradient.addColorStop(0.5, color2);
        gradient.addColorStop(1, color1);
  
        ctx.lineWidth = 8; // Adjust thickness of the border
        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.arc(geom.width / 2, geom.height / 2, radius - 4, 0, 2 * Math.PI); // Adjust to fit border radius
        ctx.stroke();
      }
    }
  
    registerPaint('circular-border', CircularBorder);
  }
  