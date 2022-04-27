var music = 0;
onEvent("wizardfightM", "click", function() {
  stopSound("assets/Super Mario Bros. Theme Song.mp3");
  stopSound("assets/Pokémon Red  Blue Music Opening Theme.mp3");
  stopSound("Original Tetris theme (Tetris Soundtrack).mp3");
  stopSound("assets/Relax 1 min - Sunset, Ocean, Moon - Relaxing Music.mp3");
  stopSound("Beyond Music - Digit By Digit (Mans Billner - Epic Electronic Futuristic Action).mp3");
  stopSound("assets/Halo Theme Song Original.mp3");
  playSound("assets/category_background/fantasy.mp3", true);
  console.log("Wizard Music");
});
onEvent("marioM", "click", function() {
  stopSound("assets/category_background/fantasy.mp3");
  stopSound("assets/Pokémon Red  Blue Music Opening Theme.mp3");
  stopSound("Original Tetris theme (Tetris Soundtrack).mp3");
  stopSound("assets/Relax 1 min - Sunset, Ocean, Moon - Relaxing Music.mp3");
  stopSound("Beyond Music - Digit By Digit (Mans Billner - Epic Electronic Futuristic Action).mp3");
  stopSound("assets/Halo Theme Song Original.mp3");
  playSound("assets/Super Mario Bros. Theme Song.mp3", true);
  console.log("Mario Music");
});
onEvent("pokemonM", "click", function() {
  stopSound("assets/category_background/fantasy.mp3");
  stopSound("assets/Super Mario Bros. Theme Song.mp3");
  stopSound("Original Tetris theme (Tetris Soundtrack).mp3");
  stopSound("assets/Relax 1 min - Sunset, Ocean, Moon - Relaxing Music.mp3");
  stopSound("Beyond Music - Digit By Digit (Mans Billner - Epic Electronic Futuristic Action).mp3");
  stopSound("assets/Halo Theme Song Original.mp3");
  playSound("assets/Pokémon Red  Blue Music Opening Theme.mp3", true);
  console.log("Pokemon Music");
});
onEvent("tertris", "click", function() {
  stopSound("assets/category_background/fantasy.mp3");
  stopSound("assets/Super Mario Bros. Theme Song.mp3");
  stopSound("assets/Pokémon Red  Blue Music Opening Theme.mp3");
  stopSound("assets/Relax 1 min - Sunset, Ocean, Moon - Relaxing Music.mp3");
  stopSound("Beyond Music - Digit By Digit (Mans Billner - Epic Electronic Futuristic Action).mp3");
  stopSound("assets/Halo Theme Song Original.mp3");
  playSound("Original Tetris theme (Tetris Soundtrack).mp3", true);
  console.log("Tetris Music");
});
onEvent("relaxM", "click", function() {
  stopSound("assets/category_background/fantasy.mp3");
  stopSound("assets/Super Mario Bros. Theme Song.mp3");
  stopSound("assets/Pokémon Red  Blue Music Opening Theme.mp3");
  stopSound("Original Tetris theme (Tetris Soundtrack).mp3");
  stopSound("Beyond Music - Digit By Digit (Mans Billner - Epic Electronic Futuristic Action).mp3");
  stopSound("assets/Halo Theme Song Original.mp3");
  playSound("assets/Relax 1 min - Sunset, Ocean, Moon - Relaxing Music.mp3", true);
  console.log("Relax Music");
});
onEvent("beyondM", "click", function() {
  stopSound("assets/category_background/fantasy.mp3");
  stopSound("assets/Super Mario Bros. Theme Song.mp3");
  stopSound("assets/Pokémon Red  Blue Music Opening Theme.mp3");
  stopSound("Original Tetris theme (Tetris Soundtrack).mp3");
  stopSound("assets/Relax 1 min - Sunset, Ocean, Moon - Relaxing Music.mp3");
  stopSound("assets/Halo Theme Song Original.mp3");
  playSound("Beyond Music - Digit By Digit (Mans Billner - Epic Electronic Futuristic Action).mp3", true);
  console.log("Beyond Music");
});
onEvent("haloM", "click", function() {
  stopSound("assets/category_background/fantasy.mp3");
  stopSound("assets/Super Mario Bros. Theme Song.mp3");
  stopSound("assets/Pokémon Red  Blue Music Opening Theme.mp3");
  stopSound("Original Tetris theme (Tetris Soundtrack).mp3");
  stopSound("assets/Relax 1 min - Sunset, Ocean, Moon - Relaxing Music.mp3");
  stopSound("Beyond Music - Digit By Digit (Mans Billner - Epic Electronic Futuristic Action).mp3");
  playSound("assets/Halo Theme Song Original.mp3", true);
  console.log("Halo Music");
});
onEvent("Shuffle", "click", function() {
  music = randomNumber(1, 7);
  shuffle();
});
function shuffle() {
  if (music===1) {
    stopSound("assets/Super Mario Bros. Theme Song.mp3");
    stopSound("assets/Pokémon Red  Blue Music Opening Theme.mp3");
    stopSound("Original Tetris theme (Tetris Soundtrack).mp3");
    stopSound("assets/Relax 1 min - Sunset, Ocean, Moon - Relaxing Music.mp3");
    stopSound("Beyond Music - Digit By Digit (Mans Billner - Epic Electronic Futuristic Action).mp3");
    stopSound("assets/Halo Theme Song Original.mp3");
    playSound("assets/category_background/fantasy.mp3", false);
    setTimeout(function() {
      shuffle();
    }, 98000);
  } else if (music===2) {
    stopSound("assets/category_background/fantasy.mp3");
    stopSound("assets/Pokémon Red  Blue Music Opening Theme.mp3");
    stopSound("Original Tetris theme (Tetris Soundtrack).mp3");
    stopSound("assets/Relax 1 min - Sunset, Ocean, Moon - Relaxing Music.mp3");
    stopSound("Beyond Music - Digit By Digit (Mans Billner - Epic Electronic Futuristic Action).mp3");
    stopSound("assets/Halo Theme Song Original.mp3");
    playSound("assets/Super Mario Bros. Theme Song.mp3", false);
    setTimeout(function() {
      shuffle();
    }, 82000);
  } else if (music===3) {
    stopSound("assets/category_background/fantasy.mp3");
    stopSound("assets/Super Mario Bros. Theme Song.mp3");
    stopSound("Original Tetris theme (Tetris Soundtrack).mp3");
    stopSound("assets/Relax 1 min - Sunset, Ocean, Moon - Relaxing Music.mp3");
    stopSound("Beyond Music - Digit By Digit (Mans Billner - Epic Electronic Futuristic Action).mp3");
    stopSound("assets/Halo Theme Song Original.mp3");
    playSound("assets/Pokémon Red  Blue Music Opening Theme.mp3", false);
    setTimeout(function() {
      shuffle();
    }, 114000);
  } else if ((music===4)) {
    stopSound("assets/category_background/fantasy.mp3");
    stopSound("assets/Super Mario Bros. Theme Song.mp3");
    stopSound("assets/Pokémon Red  Blue Music Opening Theme.mp3");
    stopSound("assets/Relax 1 min - Sunset, Ocean, Moon - Relaxing Music.mp3");
    stopSound("Beyond Music - Digit By Digit (Mans Billner - Epic Electronic Futuristic Action).mp3");
    stopSound("assets/Halo Theme Song Original.mp3");
    playSound("Original Tetris theme (Tetris Soundtrack).mp3", false);
    setTimeout(function() {
      shuffle();
    }, 84000);
  } else if ((music===5)) {
    stopSound("assets/category_background/fantasy.mp3");
    stopSound("assets/Super Mario Bros. Theme Song.mp3");
    stopSound("assets/Pokémon Red  Blue Music Opening Theme.mp3");
    stopSound("Original Tetris theme (Tetris Soundtrack).mp3");
    stopSound("Beyond Music - Digit By Digit (Mans Billner - Epic Electronic Futuristic Action).mp3");
    stopSound("assets/Halo Theme Song Original.mp3");
    playSound("assets/Relax 1 min - Sunset, Ocean, Moon - Relaxing Music.mp3", false);
    setTimeout(function() {
      shuffle();
    }, 95000);
  } else if ((music===6)) {
    stopSound("assets/category_background/fantasy.mp3");
    stopSound("assets/Super Mario Bros. Theme Song.mp3");
    stopSound("assets/Pokémon Red  Blue Music Opening Theme.mp3");
    stopSound("Original Tetris theme (Tetris Soundtrack).mp3");
    stopSound("assets/Relax 1 min - Sunset, Ocean, Moon - Relaxing Music.mp3");
    stopSound("assets/Halo Theme Song Original.mp3");
    playSound("Beyond Music - Digit By Digit (Mans Billner - Epic Electronic Futuristic Action).mp3", false);
    setTimeout(function() {
      shuffle();
    }, 173000);
  } else if ((music===7)) {
    stopSound("assets/category_background/fantasy.mp3");
    stopSound("assets/Super Mario Bros. Theme Song.mp3");
    stopSound("assets/Pokémon Red  Blue Music Opening Theme.mp3");
    stopSound("Original Tetris theme (Tetris Soundtrack).mp3");
    stopSound("assets/Relax 1 min - Sunset, Ocean, Moon - Relaxing Music.mp3");
    stopSound("Beyond Music - Digit By Digit (Mans Billner - Epic Electronic Futuristic Action).mp3");
    playSound("assets/Halo Theme Song Original.mp3", false);
    setTimeout(function() {
      shuffle();
    }, 181000);
  } else {
    
  }
}
