document.querySelectorAll('.seat').forEach(seat => {
    seat.addEventListener('click', () => {
      seat.classList.toggle('selected');
    });
  });
  