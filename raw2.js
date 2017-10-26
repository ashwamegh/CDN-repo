(
    const widget = document.getElementById('widget');
    widget.innerHTML += '<a href="https://www.google.com" ><button type="primary">Book Now</button></a>';

    widget.onclick = (event) => {
      widget.innerHTML += '<div id="overlay"></div>';
      const overlay = document.getElementById('overlay');

      overlay.style.position='fixed';
      overlay.style.display = 'block';
      overlay.style.width ='100%';
      overlay.style.height = '100%';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.right = '0';
      overlay.style.bottom = '0';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
      overlay.style.zIndex = '99999';
      overlay.style.cursor = 'pointer';
    }
)();