// ============== Circular Progress Animation ==============
function animateProgressRings() {
  const progressRings = document.querySelectorAll('.progress-ring');
  const circumference = 2 * Math.PI * 38; // circle radius 38
  
  progressRings.forEach((ring, index) => {
    const progress = ring.getAttribute('data-progress');
    if (!progress) return;
    const offset = circumference * (1 - progress / 100);
    
    setTimeout(() => {
      ring.style.strokeDashoffset = offset;
    }, index * 200); // stagger animation by 200ms
  });
}

// ============== Video Gallery Loader ==============
async function loadVideos() {
  try {
    const res = await fetch('videos.json');
    if (!res.ok) throw new Error("videos.json not found!");
    const videoIDs = await res.json();
    const gallery = document.getElementById('video-gallery');
    gallery.innerHTML = "";
    videoIDs.forEach((id) => {
      const videoEl = document.createElement('div');
      videoEl.classList.add('video-card');
      videoEl.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${id}?rel=0&modestbranding=1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          loading="lazy"
        ></iframe>
      `;
      gallery.appendChild(videoEl);
    });
  } catch (err) {
    const gallery = document.getElementById('video-gallery');
    gallery.innerHTML = `<div style="text-align:center;padding:40px;color:#a0a0a0;">Videos coming soon!</div>`;
    console.error(err);
  }
}

// Initialize animations and video loading on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  animateProgressRings();
  loadVideos();
});
