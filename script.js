document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.progress-ring').forEach((circle, i) => {
      const progress = circle.getAttribute('data-progress');
      const circumference = 2 * Math.PI * 38;
      const offset = circumference * (1 - progress / 100);
      setTimeout(() => {
        circle.style.strokeDashoffset = offset;
      }, i * 200);
    });
  });
  