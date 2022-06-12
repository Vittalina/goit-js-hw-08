import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

// const currentTimeToPlayOn = localStorage.getItem(LOCALSTORAGE_KEY);

player.on('timeupdate', throttle(function (value) {
    localStorage.setItem(LOCALSTORAGE_KEY, value.seconds);
    console.log(LOCALSTORAGE_KEY);
}, 1000));

if (localStorage.getItem(LOCALSTORAGE_KEY)) {
    player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));
}