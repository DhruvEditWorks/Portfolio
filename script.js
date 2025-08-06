async function loadVideos() {
    const res = await fetch('videos.json');
    const videoIDs = await res.json();

    const gallery = document.getElementById('video-gallery');

    videoIDs.forEach(id => {
        const videoEl = document.createElement('div');
        videoEl.classList.add('video-card');

        videoEl.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${id}" 
                allowfullscreen>
            </iframe>
        `;

        gallery.appendChild(videoEl);
    });
}

loadVideos();