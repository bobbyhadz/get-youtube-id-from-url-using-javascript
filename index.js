// Get the YouTube video ID from a URL using JavaScript

console.log('bobbyhadz.com');

function getIDfromURL(url) {
  const regExp =
    /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;

  const match = url.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  }

  console.log('The supplied URL is not a valid youtube URL');

  return '';
}

const button = document.getElementById('btn');

const videoIDElement = document.getElementById('video-id');

const ytVideoElement = document.getElementById('yt-video');

button.addEventListener('click', () => {
  console.log(ytVideoElement.href);

  videoIDElement.innerHTML = getIDfromURL(ytVideoElement.href);
});
