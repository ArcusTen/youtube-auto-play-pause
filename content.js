document.addEventListener('visibilitychange', function() {
  const video = document.querySelector('video');
  if (document.hidden) {
      if (video && !video.paused) {
          video.pause();
      }
  } else {
      if (video && video.paused) {
          video.play();
      }
  }
});
