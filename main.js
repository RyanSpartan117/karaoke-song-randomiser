$(randomize);

function randomize() {



  let randomButton = $("#random-song");
  let displaySong = $("#text-display");

  randomButton.click ( function(e) {

    $(displaySong).html(pickSong());


  });


}

function pickSong() {

  let songArray = ["Living on a Prayer - Bon Jovi", "I believe in a thing called love - The Darkness"];

  let pickRandomSong = Math.floor((Math.random()) * songArray.length);

  return songArray[pickRandomSong];

}