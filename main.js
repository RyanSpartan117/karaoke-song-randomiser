$(randomize);

function randomize() {

  let randomButton = $("#random-song");
  let displaySong = $("#text-display");
  let reader = new FileReader();

  reader.onload = function(e) {
    let text = reader.result;
  }

  // show = reader.readAsText("newcsv.csv");
  // console.log(show);
  // csvArray = Papa.parse('karafuncatalog.csv', Papa.config);
  // console.log(csvArray)

  // csvArray = ("karafuncatalog.csv");
  // csvArray = ();


  // console.log(csvArray);

//   function readTextFile(file)
// {
//     var rawFile = new XMLHttpRequest();
//     rawFile.open("GET", file, false);
//     rawFile.onreadystatechange = function ()
//     {
//         if(rawFile.readyState === 4)
//         {
//             if(rawFile.status === 200 || rawFile.status == 0)
//             {
//                 var allText = rawFile.responseText;
//                 alert(allText);
//             }
//         }
//     }
//     rawFile.send(null);
// }

// hi = readTextFile("newcsv.csv");

// hello = hi.split("\n");
// console.log(hello)


  randomButton.click(function(e) {

    $(displaySong).html(pickSong());

  });

}

function pickSong() {

  let songArray = ["Living on a Prayer - Bon Jovi", "I believe in a thing called love - The Darkness", "Summer Loving - GREASE DUET!", "I Love Rock & Roll - Joan Jett & the Blackhearts", "Love Shack - The B-52's", "Creep - Radiohead", "Lean on Me - Bill Withers", "The Real Slim Shady - Eminem", "Walk this Way - Aerosmith ft. RunDMC", "Go Your Own Way - Fleetwood Mac", "Baby got Back - Sir Mix-A-Lot", "Red Hot Chilli Peppers- Can't Stop", "Queen - Don't stop me now", "Last Nite - The Strokes", "Say it ain't so - Weezer", "Plug in Baby - Muse", "Pretty fly for a white guy - The Offspring", "Brown Eyed Girl - Van Morrison", "New York New York - Frank Sinatra", "I Will Survive - Gloria Gaynor", "Papa was a Rolling stone - The Temptations", "Under the Boardwalk - The Drifters", "9-5 - Dolly Parton", "You need me I don't need you - Ed Sheeran", "ACDC - Highway to Hell", "PYT - Michael Jackson", "Weezer - Iron Maiden", "copacabana - Barry Manalow", "The trooper - Iron Maiden", "We will Rock You - Queen", "Single Ladies - Beyonce", "Dancing Queen - ABBA", "All that Jazz - Chicago", "Sweet Child o' Mine - Guns n' Roses", "ABC - The Jacksons", "Meet me Halfway - Black Eyed Peas", "Men in Black - Will Smith", "Getting Jiggy with it - Will Smith", "Coldplay - Yellow", "Coldplay - Viva la Vida",  "It wasn't me - Shaggy", "Angels - Robbie Williams", "Millennium - Robbie Williams", "Roses - Outkast", "cause i got high - Afroman"];

  let pickRandomSong = Math.floor((Math.random()) * songArray.length);

  return songArray[pickRandomSong];

}
