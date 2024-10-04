/**
 * Work with strings.
 */

let character = "rockford";
let points = 0;
let bookCollected = [0,0,0,0,0,0];



window.addEventListener("DOMContentLoaded", function() {
  'use strict';
  let rockford = document.getElementById('baddie1'),
    area = document.getElementById('flash'),
    left = area.offsetLeft,
    top  = area.offsetTop,
    posLeft = 0, 
    posTop = 0,
    tileSize = 32,
    gridSize = 24,





    /**
     * This is the background for the game area.
     */
    gameArea = [
      13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,
      12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,
      14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,
      13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,
      12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,
      14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,
      13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,
      12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,
      14,12,13,14,12,13,14,16,16,14,12,16,17,12,13,14,12,13,14,12,13,14,12,13,
      13,14,12,13,14,12,13,14,16,17,14,17,13,15,12,13,14,12,13,14,12,13,14,12,
      12,13,14,12,13,14,12,13,15,15,13,14,12,16,14,12,13,14,12,13,14,12,13,14,
      14,12,13,14,12,13,14,12,15,15,17,17,16,12,13,14,12,13,14,12,13,14,12,13,
      13,14,12,13,14,12,13,14,12,17,17,15,13,14,12,13,14,12,13,14,12,13,14,12,
      12,13,14,12,13,14,12,13,14,12,13,14,12,17,17,12,13,14,12,13,14,12,13,14,
      14,12,13,14,12,13,14,16,21,21,12,13,14,17,16,16,16,13,14,12,13,14,19,21,
      13,14,12,13,14,12,13,19,21,21,14,17,13,14,12,16,16,12,13,19,18,18,21,21,
      12,13,14,12,13,14,19,21,21,21,24,14,12,13,17,12,13,19,18,21,21,21,21,21,
      14,12,13,14,12,19,21,21,21,24,12,13,14,15,16,14,12,20,21,21,21,21,21,21,
      13,14,12,13,14,22,21,21,24,13,14,12,13,15,15,13,19,21,21,21,21,21,21,21,
      12,13,14,12,13,14,22,24,14,12,13,14,12,13,14,12,20,21,21,21,21,21,21,21,
      14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,22,21,21,21,21,21,21,21,
      13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,22,21,21,21,21,21,21,
      12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,22,21,21,21,21,21,
      14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,12,13,14,22,21,21,21,21,
    ],

    /**
     * These are blocks that cant be moved to, or something happens when you try to move on them.
     * The blocks are drawn "on top" of the gamearea. Block 10 is empty, should be 0 but looks nicer with two figures.
     */
    gameBlocks = [
      19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,
      19,10,10,10,10,10,10,10,19,10,10,10,19,10,10,10,19,10,10,10,10,10,10,19,
      19,10,10,10,10,10,10,10,19,10,19,10,19,10,19,10,19,10,10,10,10,10,10,19,
      19,10,10,10,10,10,10,10,19,10,19,10,19,10,19,10,19,10,10,10,10,10,10,19,
      19,19,19,10,10,10,10,10,19,10,19,10,19,10,19,10,19,10,10,10,10,19,19,19,
      19,26,19,10,10,10,10,10,19,10,19,10,19,10,19,10,19,10,10,10,10,19,27,19,
      19,10,19,10,10,19,19,19,19,10,19,10,19,10,19,10,19,19,19,19,10,19,10,19,
      19,10,19,10,10,19,28,10,10,10,19,10,19,10,19,10,10,10,29,19,10,19,10,19,
      19,10,19,10,10,19,19,19,19,19,19,10,19,10,19,19,19,19,19,19,10,19,10,19,
      19,10,19,10,10,10,10,10,10,19,19,10,19,10,19,19,10,10,10,10,10,19,10,19,
      19,10,19,19,19,19,19,19,19,19,20,10,21,10,22,19,19,19,19,19,19,19,10,19,
      19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,19,
      19,19,19,19,19,19,19,19,19,19,24,10,10,10,23,19,19,19,19,19,19,19,19,19,
      19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,19,
      19,10,19,19,19,19,19,19,19,19,10,10,25,10,10,19,19,19,19,19,19,19,10,19,
      19,10,19,10,10,10,10,10,10,19,19,10,19,10,19,19,10,10,10,10,10,19,10,19,
      19,10,19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,19,10,19,
      19,10,19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,19,10,19,
      19,10,19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,19,10,19,
      19,10,19,19,19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,19,19,19,10,19,
      19,10,10,10,19,10,10,10,10,10,10,10,33,10,10,10,10,10,10,19,10,10,10,19,
      19,10,10,10,19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,19,10,10,10,19,
      19,10,10,31,19,10,10,10,10,10,10,10,10,10,10,10,10,10,10,19,30,10,10,19,
      19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,19,
    ];

    /**
     * Draw the initial gameplan
    */
   function drawGamePlan(gameArea, gameBlocks) {
     var i,e,b;
     for(i = 0; i < gameArea.length; i++) {
       e = document.createElement('div');
       e.innerHTML = '';
       e.className = 'tile t' + gameArea[i] + (gameBlocks[i] ? ' b' + gameBlocks[i] : '');
       e.id = 'n' + i;
       area.appendChild(e);
      } 
    };
    console.log('Drawing gameplan.');  
    drawGamePlan(gameArea, gameBlocks);
    
    
    /**
     * Move Rockford
    */
   var move = function(moveLeft, moveTop, which) {
     
     function moveIt() {
       rockford.style.left = (area.offsetLeft + posLeft*tileSize + tileSize/2) + 'px';
       rockford.style.top  = (area.offsetTop + posTop*tileSize + tileSize/2) + 'px';      
      //  console.log("
      // Moved to: " + rockford.style.left + "x" + rockford.style.top);
      };
      if(which) { rockford.className='baddie ' + which; }
      
      
      // First if means the baddie can movie
      if(!(gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize]-10)) {
        posLeft += moveLeft; 
        posTop  += moveTop;
        moveIt();
      } else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 20)) {
        rockford.style.backgroundImage = "url(img/character/vampire_new.png)";
        character = "vampire";
        /* audio.play(); */
        /* alert('Opps door locked') */
      }

      else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 21)) {
        rockford.style.backgroundImage = "url(img/character/water_nymph.png)";
        character = "nymph";
        /* audio.play(); */
        /* alert('Opps door locked') */
      }

      else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 22)) {
        rockford.style.backgroundImage = "url(img/character/giant_ant.png)";
        character = "ant";
        /* audio.play(); */
        /* alert('Opps door locked') */
      }

      else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 23)) {
        rockford.style.backgroundImage = "url(img/character/merfolk_fighter_water.png)";
        character = "merfolk";
        /* audio.play(); */
        /* alert('Opps door locked') */
      }

      else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 24)) {
        rockford.style.backgroundImage = "url(img/character/deep_elf_knight_new.png)";
        character = "knight";
        /* audio.play(); */
        /* alert('Opps door locked') */
      }

      else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 25)) {
        rockford.style.backgroundImage = "url(img/character/mummy.png)";
        character = "mummy";
        /* audio.play(); */
        /* alert('Opps door locked') */
      } 

      else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 26)) {
        if (character === "mummy" && bookCollected[0] === 0) {
          points += 1;
          bookCollected[0] = 1;
          document.getElementById("n121").style.backgroundImage="url(img/tiles/floor/grass_0_old.png)";
          gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] = 10;
          alert("You have read the book and grown a brain.");
          /* gameBlocks[121] = 10; */
          /* document.getElementsByClassName("b26").style.backgroundImage = "none"; */

        }
         
        else {
          alert("You haven't got the right character to read this book!")
        }

        if(points === 6) {
          document.getElementById("n492").style.backgroundImage="url(img/books/wizard.png), url(img/tiles/floor/grass_0_old.png)"
        }
      }

      else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 27)) {
        if (character === "ant" && bookCollected[1] === 0) {
          points += 1;
          bookCollected[1] = 1;
          document.getElementById("n142").style.backgroundImage="url(img/tiles/floor/grass_0_old.png)";
          gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] = 10;
          alert("You have read the book, unfortunately you are still an ant. But smarter.");
        }

        else {
          alert("You haven't got the right character to read this book!")
        }

        if(points === 6) {
          document.getElementById("n492").style.backgroundImage="url(img/books/wizard.png), url(img/tiles/floor/grass_0_old.png)"
        }
      }

      else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 28)) {
        if (character === "knight" && bookCollected[2] === 0) {
          points += 1;
          bookCollected[2] = 1;
          document.getElementById("n174").style.backgroundImage="url(img/tiles/floor/grass_0_old.png)";
          gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] = 10;
          alert("You have read your first book ever and you hated every minute of it.");
        }

        else {
          alert("You haven't got the right character to read this book!")
        }

        if(points === 6) {
          document.getElementById("n492").style.backgroundImage="url(img/books/wizard.png), url(img/tiles/floor/grass_0_old.png)"
        }
      }

      else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 29)) {
        if (character === "vampire" && bookCollected[3] === 0) {
          points += 1;
          bookCollected[3] = 1;
          document.getElementById("n186").style.backgroundImage="url(img/tiles/floor/grass_0_old.png)";
          gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] = 10;
          alert("You have read the book on how tasty garlic is. Go and try it.");
        }

        else {
          alert("You haven't got the right character to read this book!")
        }

        if(points === 6) {
          document.getElementById("n492").style.backgroundImage="url(img/books/wizard.png), url(img/tiles/floor/grass_0_old.png)"
        }
      }

      else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 30)) {
        if (character === "merfolk" && bookCollected[4] === 0) {
          points += 1;
          bookCollected[4] = 1;
          document.getElementById("n548").style.backgroundImage="url(img/tiles/floor/grass_full_old.png)";
          gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] = 10;
          alert("You read the book. Now it's all wet and soggy. No one else can read it.");
        }

        else {
          alert("You haven't got the right character to read this book!")
        }

        if(points === 6) {
          document.getElementById("n492").style.backgroundImage="url(img/books/wizard.png), url(img/tiles/floor/grass_0_old.png)"
        }
      }

      else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 31)) {
        if (character === "nymph" && bookCollected[5] === 0) {
          points += 1;
          bookCollected[5] = 1;
          document.getElementById("n531").style.backgroundImage="url(img/tiles/floor/grass_0_old.png)";
          gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] = 10;
          alert("You have read the book on how to trick humans. Now you might be able to do it.");

        }

        else {
          alert("You haven't got the right character to read this book!")
        }

        if(points === 6) {
          document.getElementById("n492").style.backgroundImage="url(img/books/wizard.png), url(img/tiles/floor/grass_0_old.png)"
        }
      }
      
      else if((gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] === 33)) {

        if(points === 6) {
        alert("Thank you for collecting all the books, you have won the game! I must go now.");
        document.getElementById("n492").style.backgroundImage="url(img/tiles/floor/grass_0_old.png)";
        gameBlocks[(posLeft+moveLeft)+(posTop+moveTop)*gridSize] = 10;
        let restart = prompt("Do you want to play again?").toLowerCase();
          if(restart === "yes") {
            window.location.reload();
          } 

        } 
        else {
          alert(`This rock looks special but you need more wisdom to understand it...\nThere are ${6 - points} books left`)
        }
      }

      else {  // Else means the baddie cannot move because of a wall
        console.log('Block detected, cant move.');
      }
      console.log("area.offsetLeft", area.offsetLeft);
      console.log("area.offsetTop", area.offsetTop);
      console.log("posLeft", posLeft)
      console.log("posTop", posTop)
    };

    console.log('Moving Mickey Mos (Rockford) to initial spot.');  
    move(12, 12, 'down');

      
      


    
    
    /**
     * Keep track on keys pressed and move Rockford accordingly.
    */
   document.onkeydown = function(event) {
    var key;
    key = event.keyCode || event.which;
    switch(key) {
      case 37: move(-1, 0, 'left'); break;
      case 39: move(1, 0, 'right'); break;
      case 38: move(0, -1, 'up'); break;
      case 40: move(0, 1, 'down'); break; 
      default: move(0, 0, 'down'); break;
    };
    console.log('Keypress: ' + event + ' key: ' + key + ' new pos: ' + rockford.offsetLeft + ', ' + rockford.offsetTop);
  };

    console.log('Everything is ready.');  
});