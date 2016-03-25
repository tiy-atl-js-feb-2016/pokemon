// Javascript Entry Point

import $ from 'jquery';
import _ from 'lodash';

var fighters = [
  {
    name: 'Charizard',
    url: 'http://cdn.bulbagarden.net/upload/thumb/7/7e/006Charizard.png/250px-006Charizard.png'
  },
  {
    name: 'Snorelax',
    url: 'http://cdn.bulbagarden.net/upload/thumb/f/fb/143Snorlax.png/250px-143Snorlax.png'
  }

]

function setFighters(a, b) {
  $('.fighter1').append(
    `<img src="${a.url}">`
  );
  $('.fighter2').append(
    `<img src="${b.url}">`
  );
}

function status(msg) {
  $('.status').text(msg);
}

setFighters(fighters[0], fighters[1]);
status('Fight!');

setTimeout(() => {

  var winner = _.sample(fighters);

  status(`${winner.name} is the winner!`);

}, 5000);
