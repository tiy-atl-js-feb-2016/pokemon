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
  },
  {
    name: 'Pikachu',
    url: 'http://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png'
  },
  {
    name: 'Scyther',
    url: 'http://cdn.bulbagarden.net/upload/thumb/b/ba/123Scyther.png/250px-123Scyther.png'
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

$('.choosescene').on('click', '.fighter-select', event => {
  var fighterName = $(event.currentTarget).data('fighter');

  // console.log(event.target, fighterName);

  // var [fighter1] = fighters.filter(obj => obj.name === fighterName);
  var fighter1 = _.find(fighters, {name: fighterName});
  var fighter2 = _.sample(fighters);

  // console.log(fighter1, fighter2);
  
  setFighters(fighter1, fighter2);
  status('Fight!');

  $('.choosescene').hide();
  $('.fightscene').show();

  setTimeout(() => {

    var winner = _.sample(['CPU', 'You']);

    status(`${winner} Won!`);

  }, 5000);
});

