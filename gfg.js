
///////////////////// Variable Elements ///////////////////////////////

// Background scrolling speed
let move_speed = 3;
  
// Gravity constant value
let gravity = 0.5;

// Setting initial game state to start
let game_state = 'Start';
  
// Getting reference to the bird element
let bird = document.querySelector('.bird');
  
// Getting bird element properties
let bird_props = bird.getBoundingClientRect();
let background =
    document.querySelector('.background')
            .getBoundingClientRect();
  
// Getting reference to the score element
///////////// FINISH THE CODE: UNCOMMENT BELOW AND FILL IN //////////////////
//let score_val = 
//let message =
//let score_title =


/////////////////////////// Start ////////////////////////////////////////
  




//////////////////////////// Move ////////////////////////////////////////

function play() {
  function move() {
    
    // Detect if game has ended
    if (game_state != 'Play') return;
    
    // Getting reference to all the pipe elements

    //////////////////// FINISH THE CODE: UNCOMMENT BELOW AND FILL IN /////////////////
    //let pipe_sprite =    

    pipe_sprite.forEach((element) => {
      
      //////////////////// FINISH THE CODE: UNCOMMENT BELOW AND FILL IN /////////////////
      // let pipe_sprite_props = 
      // bird_props = 
      
      // Delete the pipes if they have moved out
      // of the screen hence saving memory
      if (pipe_sprite_props.right <= 0) {
        element.remove();
      } else {
        // Collision detection with bird and pipes
        if (
          bird_props.left < pipe_sprite_props.right &&
          bird_props.right > pipe_sprite_props.left &&
          bird_props.top < pipe_sprite_props.bottom &&
          bird_props.bottom > pipe_sprite_props.top
        ) {
          
          // Change game state and end the game
          // if collision occurs
          game_state = 'End';
          message.innerHTML = 'Press Enter To Restart'; // MODIFY
          message.style.left = '28vw'; // MODIFY
          return;
        } else {
          // Increase the score if player
          // has the successfully dodged the pipes
          if (
            pipe_sprite_props.right < bird_props.left &&
            pipe_sprite_props.right + 
            move_speed >= bird_props.left &&
            element.increase_score == '1'
          ) {
            score_val.innerHTML = +score_val.innerHTML + 1;
          }
          element.style.left = 
            pipe_sprite_props.left - move_speed + 'px';
        }
      }
    });

    requestAnimationFrame(move);
  }

/////////////////////////////// Environment //////////////////////////////////

 




//////////////////////////////////////////////////////////////////////////////