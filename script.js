// ============== Circular Progress Animation ==============
function animateProgressRings() {
  const progressRings = document.querySelectorAll('.progress-ring');
  const circumference = 2 * Math.PI * 38; // radius 38 is circle radius in SVG

  progressRings.forEach((ring, index) => {
    const progress = ring.getAttribute('data-progress');
    if (!progress) return;
    const offset = circumference * (1 - progress / 100);
    setTimeout(() => {
      ring.style.strokeDashoffset = offset;
    }, index * 200); // stagger animation a bit for effect
  });
}

// ============== Video Data by Categories ==============
const videoData = {
  motionGraphics: [
    "reU0NJcV7Hg",
    "TjMaxM-_5Fc"
    // Add more YouTube video IDs here
  ],
  vlogs: [
    "6JejZ7-GrFI",
    "6JejZ7-GrFI"
  ],
  gaming: [
    "Y4o6qZqoJ28",
    "YR-D8jryFCM"
  ]
};

// ============== Thumbnail Data by Categories ==============
const thumbnailData = {
  documentary: [
    {title: "Poision", image: "thumbnails/documentary/doc-thumb-1.png", description: "Cinematic thumbnail for nature series"},
    {title: "The Truth", image: "thumbnails/documentary/doc-thumb-2.png", description: "Bold design for historical content"},
    {title: "Indian Flag", image: "thumbnails/documentary/doc-thumb-3.png", description: "Bold design for historical content"}
  ],
  gaming: [
    {title: "Free Fire", image: "thumbnails/gaming/game-thumb-1.png", description: "Dynamic Free Fire gaming thumbnail"},
{title: "Minecraft", image: "thumbnails/gaming/game-thumb-2.png", description: "Dynamic Minecraft gaming thumbnail"}
  ],
  podcast: [
    {title: "Genz Podcast", image: "thumbnails/podcast/podcast-thumb-1.png", description: "Clean podcast thumbnail"}
  ],
  money: [
    {title: "Money", image: "thumbnails/money/money-thumb-1.png", description: "Money thumbnail"},
    {title: "Earn Money", image: "thumbnails/money/money-thumb-2.png", description: "Earn money thumbnail"}
  ],
  entertainment: [
    {title: "Entertainment", image: "thumbnails/entertainment/entertainment-thumb-1.png", description: "Engaging entertainment content"},
    {title: "Entertainment", image: "thumbnails/entertainment/entertainment-thumb-2.png", description: "Engaging entertainment content"}
  ]
};

// ============== AI Data for Tools Section ==============
const aiData = [
  {tool: "ChatGPT", description: "Script writing, captions, and video ideation for maximum creative flow."},
  {tool: "Ideogram", description: "Gernerates AI Images"},
  {tool: "Perplexity", description: "AI-powered Research Platform"},
  {tool: "Adobe Firefly", description: "AI-generated graphics and innovative backgrounds for dynamic scenes."}
];

// ============== Load Videos into HTML Grid ==============
function loadVideosToCategory(videoIDs, category) {
  // Convert camelCase category names to kebab-case for IDs in HTML
  const gridId = category.replace(/([A-Z])/g, '-$1').toLowerCase();
  const container = document.getElementById(gridId);

  if (!container) {
    console.warn(`Video container #${gridId} not found`);
    return;
  }

  container.innerHTML = '';
  videoIDs.forEach(id => {
    const videoCard = document.createElement('div');
    videoCard.classList.add('video-card');
    videoCard.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${id}?rel=0&modestbranding=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen 
        loading="lazy"
      ></iframe>
    `;
    container.appendChild(videoCard);
  });
}

// ============== Load Thumbnails into HTML Grid ==============
function loadThumbnailsToCategory(thumbnails, category) {
  const container = document.getElementById(`${category}-thumbnails`);
  if (!container) {
    console.warn(`Thumbnail container #${category}-thumbnails not found`);
    return;
  }
  container.innerHTML = '';
  thumbnails.forEach(thumb => {
    const thumbCard = document.createElement('div');
    thumbCard.classList.add('thumbnail-card');
    thumbCard.innerHTML = `
      <img src="${thumb.image}" alt="${thumb.title}" loading="lazy" />
      <div class="thumbnail-info">
        <div class="thumbnail-title">${thumb.title}</div>
        <div class="thumbnail-description">${thumb.description}</div>
      </div>
    `;
    container.appendChild(thumbCard);
  });
}

// ============== Load AI Tools Section ==============
function loadAIExamples() {
  const container = document.getElementById('ai-examples');
  if (!container) {
    console.warn("AI examples container #ai-examples not found");
    return;
  }
  container.innerHTML = '';
  aiData.forEach(ai => {
    const aiCard = document.createElement('div');
    aiCard.classList.add('ai-card');
    aiCard.innerHTML = `
      <div class="ai-tool-name">${ai.tool}</div>
      <div class="ai-description">${ai.description}</div>
    `;
    container.appendChild(aiCard);
  });
}

// ============== Load All Content ==============
function loadAllContent() {
  // Load videos
  Object.keys(videoData).forEach(category => {
    loadVideosToCategory(videoData[category], category);
  });

  // Load thumbnails
  Object.keys(thumbnailData).forEach(category => {
    loadThumbnailsToCategory(thumbnailData[category], category);
  });

  // Load AI examples
  loadAIExamples();
}

// ============== Init on DOM Ready ==============
document.addEventListener('DOMContentLoaded', () => {
  animateProgressRings();
  loadAllContent();
});
