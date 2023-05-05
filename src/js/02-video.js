import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const myPlayer = new Player(iframe);

const currentTimeOnPlayer = localStorage.getItem('videoplayer-current-time');

currentTimeOnPlayer
  ? myPlayer.setCurrentTime(currentTimeOnPlayer)
  : myPlayer.setCurrentTime(0);

console.log(currentTimeOnPlayer);

myPlayer.on(
  'timeupdate',
  throttle(
    data => localStorage.setItem('videoplayer-current-time', data.seconds),
    1000
  )
);
