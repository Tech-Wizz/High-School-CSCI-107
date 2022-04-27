//Test commands are Heart, Money, and Attack
var maxhp = 10;
var playerhp = 10;
var coins = 500;
var playerattack = 2;
var playerdef = 1;
var wenimyattack = 0;
var wenimydef = 0;
var wenimyhp = 0;
var wmaxHP = 0;
var denimyattack = 2;
var denimydef = 2;
var denimyhp = 10;
var dmaxHP = 10;
var ienimyattack = 4;
var ienimydef = 4;
var ienimyhp = 20;
var imaxHP = 20;
var kenimyattack = 6;
var kenimydef = 6;
var kenimyhp = 20;
var kmaxHP = 30;
var staff$ = 100;
var heart$ = 100;
var Shield$ = 100;
var HP$ = 100;
var weatherdefeat = 0;
var darkdefeat = 0;
var icedefeat = 0;
var kingdefeat = 0;
var torch = 0;
//The title
console.log("Starting...");
playSound("assets/category_background/fire_burning.mp3", false);
onEvent("torch1", "click", function() {
  if (torch==1||2) {
    coins = coins+150;
    console.log("Secret");
    torch = torch++;
  }
});
onEvent("torch2", "click", function() {
  if (torch==1||2) {
    coins = coins+150;
    console.log("Secret");
    torch = torch++;
  }
});
onEvent("credit", "click", function() {
  setScreen("Credit");
});
onEvent("credtitle", "click", function() {
  setScreen("Title");
});
onEvent("Start", "click", function() {
  console.log("loading...");
  hideElement("kingportal");
  hideElement("kinglb");
  hideElement("Info");
  stopSound("assets/category_background/fire_burning.mp3");
  setScreen("loading");
  setText("coincount", coins);
  setText("HP", playerhp + "/" + maxhp);
  setTimeout(function() {
    setScreen("Map");
  }, 5000);
});
//How to help player
onEvent("info", "click", function() {
  hideElement("info");
  showElement("Info");
  setTimeout(function() {
    hideElement("Info");
    showElement("info");
  }, 15000);
});
//The store and to upgrade the player for further battles
onEvent("store", "click", function() {
  setScreen("Store");
  setText("coincount1", coins);
  setText("HP1", playerhp + "/" + maxhp);
  hideElement("bubble");
  hideElement("bubblewords");
  hideElement("HPfull");
  console.log("Location is store");
});
onEvent("staff", "click", function() {
  if (coins>staff$) {
   playerattack = playerattack+2;
   coins = coins - staff$;
   staff$ = staff$+25;
   setText("staffcost", "$"+ staff$);
   setText("coincount1", coins);
   setText("HP1", playerhp + "/" + maxhp);
   playSound("assets/category_digital/coin_3.mp3", false);
   console.log("Bought a powerful staff");
   console.log("Player Attack: " + playerattack);
   console.log("$" + coins);
  } else {
    console.log("Not enough coins");
    broke();
  }
});
onEvent("heartshop", "click", function() {
  if (coins>heart$) {
   if (maxhp==playerhp) {
     maxhp = maxhp+5;
     playerhp = playerhp+5;
   } else {
     maxhp = maxhp+5;
     playerhp = playerhp+2;
   }
   coins = coins - heart$;
   heart$ = heart$+25;
   setText("HPcost", "$"+ heart$);
   setText("coincount1", coins);
   setText("HP1", playerhp + "/" + maxhp);
   playSound("assets/category_digital/coin_3.mp3", false);
   console.log("Bought extra HP");
   console.log("Max HP: " + maxhp);
   console.log("$" + coins);
  } else {
    console.log("Not enough coins");
    broke();
  }
});
onEvent("shield", "click", function() {
  if (coins>Shield$) {
   playerdef = playerdef+2;
   coins = coins - staff$;
   Shield$ = Shield$+25;
   setText("shieldcost", "$"+ Shield$);
   setText("coincount1", coins);
   setText("HP1", playerhp + "/" + maxhp);
   console.log("Bought Extra Shield");
   playSound("assets/category_digital/coin_3.mp3", false);
   console.log("Deffence: " + playerdef);
   console.log("$" + coins);
  } else {
    console.log("Not enough coins");
    broke();
  }
});
onEvent("hp", "click", function() {
  if (coins>HP$ && playerhp<maxhp) {
   if (playerhp==maxhp-5 || playerhp<maxhp-5) {
     playerhp = playerhp+5;
   } else if (playerhp==maxhp-4) {
     playerhp = playerhp+4;
   } else if (playerhp==maxhp-3) {
     playerhp = playerhp+3;
   } else if (playerhp==maxhp-2) {
     playerhp = playerhp+2;
   } else if ((playerhp==maxhp-1)) {
     playerhp = playerhp+1;
   } else {
     //Do nothing 
   }
   coins = coins - HP$;
   setText("healcost", "$"+ HP$);
   setText("coincount1", coins);
   setText("HP1", playerhp + "/" + maxhp);
   playSound("assets/category_digital/coin_3.mp3", false);
   console.log("Bought HP");
   console.log("HP: " + playerhp);
   console.log("$" + coins);
  } else if ((playerhp==maxhp)) {
    console.log("HP Full");
    HPfull();
  } else {
    console.log("Not enough coins");
    broke();
  }
});
onEvent("toMap", "click", function() {
  setScreen("Map");
  setText("coincount", coins);
  setText("HP", playerhp + "/" + maxhp);
});
function broke() {
  showElement("bubble");
  showElement("bubblewords");
  hideElement("HPfull");
  setTimeout(function() {
    hideElement("bubble");
    hideElement("bubblewords");
  }, 5000);
}
function HPfull() {
  showElement("bubble");
  showElement("HPfull");
  hideElement("bubblewords");
  setTimeout(function() {
    hideElement("HPfull");
    hideElement("bubble");
  }, 5000);
  clearTimeout(HPfull);
}


//Weather Tower Arena
onEvent("weathertowerbtn", "click", function() {
  hideElement("wMap");
  hideElement("wred");
  hideElement("wblue");
  hideElement("wfire");
  hideElement("wcircle");
  hideElement("wspell");
  showElement("WeatherWizard");
  setScreen("WeatherTower");
  setText("coincount2", coins);
  setText("HP2", playerhp + "/" + maxhp);
  wmaxHP = wmaxHP+5;
  wenimyhp = wmaxHP;
  wenimyattack = wenimyattack+2;
  wenimydef = wenimydef+1;
  setText("whp", wenimyhp);
  console.log("Location is Weather Tower");
});
onEvent("wattack", "click", function() {
  hideElement("wattack");
  hideElement("wdodge");
  setTimeout(function() {
    showElement("wattack");
    showElement("wdodge");
  }, 4000);
  if (wenimyhp>0) {
    var WeatherWizard = randomNumber(1, 2);
    if (WeatherWizard==1) {
      if (playerattack>wenimydef) {
        wenimyhp = wenimyhp-(playerattack-wenimydef);
        showElement("wfire");
        playSound("assets/Explosion croma key green screen, with explosion sound effect.mp3", false);
        setTimeout(function() {
          hideElement("wfire");
          stopSound("assets/Explosion croma key green screen, with explosion sound effect.mp3");
        }, 1000);
      }
      if (wenimyattack>playerdef) {
        setTimeout(function() {
          showElement("wspell");
          playSound("Cinematic Whoosh Fireball - Sound Effect [HD].mp3", false);
          setTimeout(function() {
            hideElement("wspell");
            stopSound("Cinematic Whoosh Fireball - Sound Effect [HD].mp3");
            showElement("wred");
            playSound("assets/Damage Sound Effect.mp3", false);
            setTimeout(function() {
              hideElement("wred");
              playerhp = playerhp-(wenimyattack-playerdef);
            }, 500);
          }, 2000);
        }, 1500);
      }
      if (wenimyhp<0) {
        wenimyhp = 0;
        setText("whp", wenimyhp);
      }
      setText("HP2", playerhp + "/" + maxhp);
      setText("whp", wenimyhp);
    } else if ((WeatherWizard==2)) {
      showElement("wcircle");
      playSound("assets/Force Field 01 SOUND Effect.mp3", false);
      setTimeout(function() {
        stopSound("assets/Force Field 01 SOUND Effect.mp3");
        hideElement("wcircle");
      }, 4000);
    } else {
      if (playerattack<wenimydef) {
        wenimyhp = wenimyhp-randomNumber(0, playerattack);
      }
    }
    if (wenimyhp<1) {
      coins = coins+200+weatherdefeat*75;
      weatherdefeat = weatherdefeat++;
      playSound("assets/category_digital/coin_3.mp3", false);
      setText("coincount2", coins);
      setText("whp", wenimyhp);
      hideElement("WeatherWizard");
      showElement("wMap");
    }
    if (playerhp<1) {
      GameOver();
    }
  }
});
onEvent("wdodge", "click", function() {
  hideElement("wattack");
  hideElement("wdodge");
  setTimeout(function() {
    showElement("wattack");
    showElement("wdodge");
  }, 5000);
  if (wenimyhp>0) {
    var WeatherWizard = randomNumber(1, 2);
    if (WeatherWizard==1) {
      var hpdrop = randomNumber(0, wenimyattack);
      setTimeout(function() {
        showElement("wspell");
        playSound("Cinematic Whoosh Fireball - Sound Effect [HD].mp3", false);
        showElement("wblue");
        playSound("assets/Force Field 01 SOUND Effect.mp3", false);
        setTimeout(function() {
          hideElement("wblue");
          stopSound("Cinematic Whoosh Fireball - Sound Effect [HD].mp3");
          hideElement("wspell");
          stopSound("assets/Force Field 01 SOUND Effect.mp3");
          if (hpdrop>0) {
            showElement("wred");
            playSound("assets/Damage Sound Effect.mp3", false);
            setTimeout(function() {
              playerhp = playerhp-hpdrop;
              hideElement("wred");
            }, 500);
          }
        }, 1000);
      }, 1500);
      playerhp = playerhp;
      setText("HP2", playerhp + "/" + maxhp);
      setText("whp", wenimyhp);
    } else {
      playSound("assets/Force Field 01 SOUND Effect.mp3", false);
      playSound("assets/Force Field 01 SOUND Effect.mp3", false);
      showElement("wcircle");
      showElement("wblue");
      setTimeout(function() {
        stopSound("assets/Force Field 01 SOUND Effect.mp3");
        stopSound("assets/Force Field 01 SOUND Effect.mp3");
        hideElement("wcircle");
        hideElement("wblue");
      }, 5000);
    }
    if (wenimyhp<1) {
      playSound("assets/category_digital/coin_3.mp3", false);
      coins = (coins+200)+weatherdefeat*75;
      weatherdefeat = weatherdefeat++;
    }
    if (playerhp<1) {
      GameOver();
    }
  }
});
onEvent("wMap", "click", function() {
  setScreen("Map");
  setText("coincount", coins);
  setText("HP", playerhp + "/" + maxhp);
});


//Dark Tower Arena
onEvent("darktowerbtn", "click", function() {
  hideElement("dMap");
  hideElement("dred");
  hideElement("dblue");
  hideElement("dfire");
  hideElement("dcircle");
  hideElement("dspell");
  showElement("DarkWizard");
  setScreen("DarkTower");
  setText("coincount3", coins);
  setText("HP3", playerhp + "/" + maxhp);
  dmaxHP = dmaxHP+5;
  denimyhp = dmaxHP;
  denimyattack = denimyattack+2;
  denimydef = denimydef+1;
  setText("dhp", denimyhp);
  console.log("Location is Dark Tower");
});
onEvent("dattack", "click", function() {
  hideElement("dattack");
  hideElement("ddodge");
  setTimeout(function() {
    showElement("dattack");
    showElement("ddodge");
  }, 4000);
  if (denimyhp>0) {
    var DarkWizard = randomNumber(1, 2);
    if (DarkWizard==1) {
      if (playerattack>denimydef) {
        denimyhp = denimyhp-(playerattack-denimydef);
        showElement("dfire");
        playSound("assets/Explosion croma key green screen, with explosion sound effect.mp3", false);
        setTimeout(function() {
          hideElement("dfire");
          stopSound("assets/Explosion croma key green screen, with explosion sound effect.mp3");
        }, 1000);
      }
      if (denimyattack>playerdef) {
        setTimeout(function() {
          showElement("dspell");
          playSound("assets/electric sound effect.mp3", false);
          setTimeout(function() {
            hideElement("dspell");
            stopSound("assets/electric sound effect.mp3");
            showElement("dred");
            playSound("assets/Damage Sound Effect.mp3", false);
            setTimeout(function() {
              hideElement("dred");
              playerhp = playerhp-(denimyattack-playerdef);
            }, 500);
          }, 2000);
        }, 1500);
      }
      if (denimyhp<0) {
        denimyhp = 0;
        setText("dhp", denimyhp);
      }
      setText("HP3", playerhp + "/" + maxhp);
      setText("dhp", denimyhp);
    } else if ((DarkWizard==2)) {
      showElement("dcircle");
      playSound("assets/Force Field 01 SOUND Effect.mp3", false);
      setTimeout(function() {
        stopSound("assets/Force Field 01 SOUND Effect.mp3");
        hideElement("dcircle");
      }, 4000);
    } else {
      if (playerattack<denimydef) {
        denimyhp = denimyhp-randomNumber(0, playerattack);
      }
    }
    if (denimyhp<1) {
      coins = coins+200+darkdefeat*100;
      darkdefeat = darkdefeat++;
      playSound("assets/category_digital/coin_3.mp3", false);
      setText("coincount2", coins);
      setText("dhp", denimyhp);
      hideElement("DarkWizard");
      showElement("dMap");
    }
    if (playerhp<1) {
      GameOver();
    }
  }
});
onEvent("ddodge", "click", function() {
  hideElement("dattack");
  hideElement("ddodge");
  setTimeout(function() {
    showElement("dattack");
    showElement("ddodge");
  }, 5000);
  if (denimyhp>0) {
    var DarkWizard = randomNumber(1, 2);
    if (DarkWizard==1) {
      var hpdrop = randomNumber(0, denimyattack);
      setTimeout(function() {
        showElement("dspell");
        playSound("assets/electric sound effect.mp3", false);
        showElement("dblue");
        playSound("assets/Force Field 01 SOUND Effect.mp3", false);
        setTimeout(function() {
          hideElement("dblue");
          stopSound("assets/electric sound effect.mp3");
          hideElement("dspell");
          stopSound("assets/Force Field 01 SOUND Effect.mp3");
          if (hpdrop>0) {
            showElement("dred");
            playSound("assets/Damage Sound Effect.mp3", false);
            setTimeout(function() {
              playerhp = playerhp-hpdrop;
              hideElement("dred");
            }, 500);
          }
        }, 1000);
      }, 1500);
      playerhp = playerhp;
      setText("HP3", playerhp + "/" + maxhp);
      setText("dhp", denimyhp);
    } else {
      playSound("assets/Force Field 01 SOUND Effect.mp3", false);
      playSound("assets/Force Field 01 SOUND Effect.mp3", false);
      showElement("dcircle");
      showElement("dblue");
      setTimeout(function() {
        stopSound("assets/Force Field 01 SOUND Effect.mp3");
        stopSound("assets/Force Field 01 SOUND Effect.mp3");
        hideElement("dcircle");
        hideElement("dblue");
      }, 5000);
    }
    if (denimyhp<1) {
      playSound("assets/category_digital/coin_3.mp3", false);
      coins = (coins+200)+darkdefeat*100;
      darkdefeat = darkdefeat++;
    }
    if (playerhp<1) {
      GameOver();
    }
  }
});
onEvent("dMap", "click", function() {
  setScreen("Map");
  setText("coincount", coins);
  setText("HP", playerhp + "/" + maxhp);
});


//Ice Castle Arena
onEvent("icecastlebtn", "click", function() {
  hideElement("iMap");
  hideElement("ired");
  hideElement("iblue");
  hideElement("ifire");
  hideElement("icircle");
  hideElement("ispell");
  hideElement("toKing");
  showElement("IceWizard");
  setScreen("IceCastle");
  setText("coincount4", coins);
  setText("HP4", playerhp + "/" + maxhp);
  imaxHP = imaxHP+5;
  ienimyhp = imaxHP;
  ienimyattack = ienimyattack+2;
  ienimydef = ienimydef+1;
  setText("ihp", ienimyhp);
  console.log("Location is Ice Castle");
});
onEvent("iattack", "click", function() {
  hideElement("iattack");
  hideElement("idodge");
  setTimeout(function() {
    showElement("iattack");
    showElement("idodge");
  }, 4000);
  if (ienimyhp>0) {
    var IceWizard = randomNumber(1, 2);
    if (IceWizard==1) {
      if (playerattack>ienimydef) {
        ienimyhp = ienimyhp-(playerattack-ienimydef);
        showElement("ifire");
        playSound("assets/Explosion croma key green screen, with explosion sound effect.mp3", false);
        setTimeout(function() {
          hideElement("ifire");
          stopSound("assets/Explosion croma key green screen, with explosion sound effect.mp3");
        }, 1000);
      }
      if (ienimyattack>playerdef) {
        setTimeout(function() {
          showElement("ispell");
          playSound("assets/Fast Freezing ice SOUND Effect.mp3", false);
          setTimeout(function() {
            hideElement("ispell");
            stopSound("assets/Fast Freezing ice SOUND Effect.mp3");
            showElement("ired");
            playSound("assets/Damage Sound Effect.mp3", false);
            setTimeout(function() {
              hideElement("ired");
              playerhp = playerhp-(ienimyattack-playerdef);
            }, 500);
          }, 2000);
        }, 1500);
      }
      if (ienimyhp<0) {
        ienimyhp = 0;
        setText("ihp", ienimyhp);
      }
      setText("HP4", playerhp + "/" + maxhp);
      setText("ihp", ienimyhp);
    } else if ((IceWizard==2)) {
      showElement("icircle");
      playSound("assets/Force Field 01 SOUND Effect.mp3", false);
      setTimeout(function() {
        stopSound("assets/Force Field 01 SOUND Effect.mp3");
        hideElement("icircle");
      }, 4000);
    } else {
      if (playerattack<ienimydef) {
        ienimyhp = ienimyhp-randomNumber(0, playerattack);
      }
    }
    if (ienimyhp<1) {
      coins = (coins+350)+icedefeat*100;
      icedefeat = icedefeat++;
      playSound("assets/category_digital/coin_3.mp3", false);
      setText("coincount4", coins);
      setText("ihp", ienimyhp);
      hideElement("IceWizard");
      showElement("iMap");
      showElement("toKing");
    }
    if (playerhp<1) {
      GameOver();
    }
  }
});
onEvent("idodge", "click", function() {
  hideElement("iattack");
  hideElement("idodge");
  setTimeout(function() {
    showElement("iattack");
    showElement("idodge");
  }, 5000);
  if (ienimyhp>0) {
    var IceWizard = randomNumber(1, 2);
    if (IceWizard==1) {
      var hpdrop = randomNumber(0, ienimyattack);
      setTimeout(function() {
        showElement("ispell");
        playSound("assets/Fast Freezing ice SOUND Effect.mp3", false);
        showElement("iblue");
        playSound("assets/Force Field 01 SOUND Effect.mp3", false);
        setTimeout(function() {
          hideElement("iblue");
          stopSound("assets/Fast Freezing ice SOUND Effect.mp3");
          hideElement("ispell");
          stopSound("assets/Force Field 01 SOUND Effect.mp3");
          if (hpdrop>0) {
            showElement("ired");
            playSound("assets/Damage Sound Effect.mp3", false);
            setTimeout(function() {
              playerhp = playerhp-hpdrop;
              hideElement("ired");
            }, 500);
          }
        }, 1000);
      }, 1500);
      playerhp = playerhp;
      setText("HP4", playerhp + "/" + maxhp);
      setText("ihp", ienimyhp);
    } else {
      playSound("assets/Force Field 01 SOUND Effect.mp3", false);
      playSound("assets/Force Field 01 SOUND Effect.mp3", false);
      showElement("icircle");
      showElement("iblue");
      setTimeout(function() {
        stopSound("assets/Force Field 01 SOUND Effect.mp3");
        stopSound("assets/Force Field 01 SOUND Effect.mp3");
        hideElement("icircle");
        hideElement("iblue");
      }, 5000);
    }
    if (ienimyhp<1) {
      playSound("assets/category_digital/coin_3.mp3", false);
      coins = (coins+350)+icedefeat*100;
      icedefeat = icedefeat++;
    }
    if (playerhp<1) {
      GameOver();
    }
  }
});
onEvent("iMap", "click", function() {
  setScreen("Map");
  setText("coincount", coins);
  setText("HP", playerhp + "/" + maxhp);
});


//Throne Room Arena
onEvent("toKing", "click", function() {
  hideElement("continue");
  hideElement("kred");
  hideElement("kblue");
  hideElement("kfire");
  hideElement("kcircle");
  hideElement("kspell");
  hideElement("win");
  hideElement("kingReset");
  showElement("King");
  setScreen("Throne");
  setText("coincount5", coins);
  setText("HP5", playerhp + "/" + maxhp);
  kmaxHP = kmaxHP+5;
  kenimyhp = kmaxHP;
  kenimyattack = kenimyattack+2;
  kenimydef = kenimydef+1;
  setText("khp", kenimyhp);
  console.log("Location is Throne Room");
});
onEvent("kattack", "click", function() {
  hideElement("kattack");
  hideElement("kdodge");
  setTimeout(function() {
    showElement("kattack");
    showElement("kdodge");
  }, 4000);
  if (kenimyhp>0) {
    var King = randomNumber(1, 2);
    if (King==1) {
      if (playerattack>kenimydef) {
        kenimyhp = kenimyhp-(playerattack-kenimydef);
        showElement("kfire");
        playSound("assets/Explosion croma key green screen, with explosion sound effect.mp3", false);
        setTimeout(function() {
          hideElement("kfire");
          stopSound("assets/Explosion croma key green screen, with explosion sound effect.mp3");
        }, 1000);
      }
      if (kenimyattack>playerdef) {
        setTimeout(function() {
          showElement("kspell");
          playSound("assets/Energy explosion Sound Effect.mp3", false);
          setTimeout(function() {
            hideElement("kspell");
            stopSound("assets/Energy explosion Sound Effect.mp3");
            showElement("kred");
            playSound("assets/Damage Sound Effect.mp3", false);
            setTimeout(function() {
              hideElement("kred");
              playerhp = playerhp-(kenimyattack-playerdef);
            }, 500);
          }, 2000);
        }, 1500);
      }
      if (kenimyhp<0) {
        kenimyhp = 0;
        setText("khp", kenimyhp);
      }
      setText("HP5", playerhp + "/" + maxhp);
      setText("khp", kenimyhp);
    } else if ((King==2)) {
      showElement("kcircle");
      playSound("assets/Force Field 01 SOUND Effect.mp3", false);
      setTimeout(function() {
        stopSound("assets/Force Field 01 SOUND Effect.mp3");
        hideElement("kcircle");
      }, 4000);
    } else {
      if (playerattack<kenimydef) {
        kenimyhp = kenimyhp-randomNumber(0, playerattack);
      }
    }
    if (kenimyhp<1) {
      coins = (coins+350)+kingdefeat*10000;
      kingdefeat = kingdefeat++;
      playSound("assets/category_digital/coin_3.mp3", false);
      setText("coincount4", coins);
      setText("khp", kenimyhp);
      hideElement("King");
      showElement("continue");
      showElement("win");
      showElement("kingReset");
    }
    if (playerhp<1) {
      GameOver();
    }
  }
});
onEvent("kdodge", "click", function() {
  hideElement("kattack");
  hideElement("kdodge");
  setTimeout(function() {
    showElement("kattack");
    showElement("kdodge");
  }, 5000);
  if (kenimyhp>0) {
    var King = randomNumber(1, 2);
    if (King==1) {
      var hpdrop = randomNumber(0, kenimyattack);
      setTimeout(function() {
        showElement("kspell");
        playSound("assets/Energy explosion Sound Effect.mp3", false);
        showElement("kblue");
        playSound("assets/Force Field 01 SOUND Effect.mp3", false);
        setTimeout(function() {
          hideElement("kblue");
          stopSound("assets/Energy explosion Sound Effect.mp3");
          hideElement("kspell");
          stopSound("assets/Force Field 01 SOUND Effect.mp3");
          if (hpdrop>0) {
            showElement("kred");
            playSound("assets/Damage Sound Effect.mp3", false);
            setTimeout(function() {
              playerhp = playerhp-hpdrop;
              hideElement("kred");
            }, 500);
          }
        }, 1000);
      }, 1500);
      playerhp = playerhp;
      setText("HP4", playerhp + "/" + maxhp);
      setText("khp", kenimyhp);
    } else {
      playSound("assets/Force Field 01 SOUND Effect.mp3", false);
      playSound("assets/Force Field 01 SOUND Effect.mp3", false);
      showElement("kcircle");
      showElement("kblue");
      setTimeout(function() {
        stopSound("assets/Force Field 01 SOUND Effect.mp3");
        stopSound("assets/Force Field 01 SOUND Effect.mp3");
        hideElement("kcircle");
        hideElement("kblue");
      }, 5000);
    }
    if (kenimyhp<1) {
      playSound("assets/category_digital/coin_3.mp3", false);
      showElement("win");
      showElement("kingReset");
      showElement("continue");
      hideElement("King");
      coins = (coins+350)+icedefeat*10000;
      kingdefeat = kingdefeat++;
    }
    if (playerhp<1) {
      GameOver();
    }
  }
});
onEvent("continue", "click", function() {
  setScreen("Map");
  showElement("kingportal");
  showElement("kinglb");
  setText("coincount", coins);
  setText("HP", playerhp + "/" + maxhp);
});
onEvent("kingportal", "click", function() {
  hideElement("continue");
  hideElement("kred");
  hideElement("kblue");
  hideElement("kfire");
  hideElement("kcircle");
  hideElement("kspell");
  hideElement("win");
  hideElement("kingReset");
  showElement("King");
  setScreen("Throne");
  setText("coincount5", coins);
  setText("HP5", playerhp + "/" + maxhp);
  kmaxHP = kmaxHP+5;
  kenimyhp = kmaxHP;
  kenimyattack = kenimyattack+2;
  kenimydef = kenimydef+1;
  setText("khp", kenimyhp);
  console.log("Location is Throne Room");
});


//Admin Help/Cheat Codes
onEvent("Admin", "click", function() {
  setScreen("AdminPage");
  hideElement("aheart");
  hideElement("acoin");
  hideElement("aatack");
  hideElement("scare");
});
onEvent("adminSubmit", "click", function() {
  if (getText("adminInput")=="Heart") {
    maxhp = 50;
    playerhp = 50;
    showElement("aheart");
  } else if (getText("adminInput")=="Money") {
    coins = 1000000000;
    showElement("acoin");
  } else if (getText("adminInput")=="Attack") {
    playerattack = 8;
    showElement("aatack");
  } else if (getText("adminInput")=="Die") {
    GameOver();
  } else if (getText("adminInput")=="Reset") {
    maxhp = 10;
    playerhp = 10;
    coins = 500;
    playerattack = 2;
    playerdef = 1;
    wenimyattack = 0;
    wenimydef = 0;
    wenimyhp = 0;
    wmaxHP = 0;
    denimyattack = 2;
    denimydef = 2;
    denimyhp = 10;
    dmaxHP = 10;
    ienimyattack = 4;
    ienimydef = 4;
    ienimyhp = 20;
    imaxHP = 20;
    kenimyattack = 6;
    kenimydef = 6;
    kenimyhp = 20;
    kmaxHP = 20;
    staff$ = 100;
    heart$ = 100;
    Shield$ = 100;
    HP$ = 100;
    weatherdefeat = 0;
    darkdefeat = 0;
    icedefeat = 0;
    kingdefeat = 0;
  } else {
    setText("adminInput", "You should not be here!");
    showElement("scare");
    setTimeout(function() {
      hideElement("scare");
    }, 4000);
    setTimeout(function() {
      setText("adminInput", "Enter Code!!");
    }, 6000);
  }
});
onEvent("adminHome", "click", function() {
  setText("coincount", coins);
  setText("HP", playerhp + "/" + maxhp);
  setScreen("Map");
});


//Reseting the game
onEvent("reset", "click", function() {
  maxhp = 10;
  playerhp = 10;
  coins = 500;
  playerattack = 2;
  playerdef = 1;
  wenimyattack = 0;
  wenimydef = 0;
  wenimyhp = 0;
  wmaxHP = 0;
  denimyattack = 2;
  denimydef = 2;
  denimyhp = 10;
  dmaxHP = 10;
  ienimyattack = 4;
  ienimydef = 4;
  ienimyhp = 20;
  imaxHP = 20;
  kenimyattack = 6;
  kenimydef = 6;
  kenimyhp = 20;
  kmaxHP = 20;
  staff$ = 100;
  heart$ = 100;
  Shield$ = 100;
  HP$ = 100;
  weatherdefeat = 0;
  darkdefeat = 0;
  icedefeat = 0;
  kingdefeat = 0;
  stopSound("assets/Creepy Dungeon Ambience.mp3");
  playSound("assets/category_background/fantasy.mp3", false);
  setScreen("Title");
  hideElement("kingportal");
  hideElement("kinglb");
});
onEvent("kingReset", "click", function() {
  maxhp = 10;
  playerhp = 10;
  coins = 500;
  playerattack = 2;
  playerdef = 1;
  wenimyattack = 0;
  wenimydef = 0;
  wenimyhp = 0;
  wmaxHP = 0;
  denimyattack = 2;
  denimydef = 2;
  denimyhp = 10;
  dmaxHP = 10;
  ienimyattack = 4;
  ienimydef = 4;
  ienimyhp = 20;
  imaxHP = 20;
  kenimyattack = 6;
  kenimydef = 6;
  kenimyhp = 20;
  kmaxHP = 30;
  staff$ = 100;
  heart$ = 100;
  Shield$ = 100;
  HP$ = 100;
  weatherdefeat = 0;
  darkdefeat = 0;
  icedefeat = 0;
  kingdefeat = 0;
  setScreen("Title");
  hideElement("kingportal");
  hideElement("kinglb");
});
function GameOver() {
  stopSound("assets/category_background/fantasy.mp3");
  setScreen("GameOver");
}
onEvent("toTitle", "click", function() {
  setScreen("Title");
});
onEvent("credtitle", "click", function() {
  setScreen("Title");
});
onEvent("credit", "click", function() {
  setScreen("Title");
});



