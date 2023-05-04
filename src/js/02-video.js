import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const myPlayer = new Player(iframe);

//const onPlay = function (data) {
//  localStorage.setItem('videoplayer-current-time', data.seconds);
//};

myPlayer.on(
  'timeupdate',
  throttle(
    data => localStorage.setItem('videoplayer-current-time', data.seconds),
    1000
  )
);

myPlayer.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
