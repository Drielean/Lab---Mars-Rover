// Rover object goes here:
 

let rover = {                  // iteracao 1
   direction: 'N',
   x: 0,                     // iteracao 3
   y: 0,
   travelLog: [{x: 0, y: 0}]   // iteracao 5
}

// ======================

 // iteracao 2

function turnLeft(rover) {
   switch (rover.direction){
      case 'N':
          rover.direction = "W";
          console.log('turnLeft was called!');
          break;
      case 'S':
          rover.direction = 'E';
          console.log('turnLeft was called!');
          break;
      case 'W':
          rover.direction = 'S';
          console.log('turnLeft was called!');
          break;
      case 'E':
          rover.direction = 'N';
          cconsole.log('turnLeft was called!');
          break;
      default: 'N';
  }
   //console.log('turnLeft was called!');
 }
  
 function turnRight(rover) {
   switch (rover.direction) {
      case 'N':
          rover.direction = 'E';
          console.log('turnRight was called!');
          break;
      case 'S':
          rover.direction = 'W';
          console.log('turnRight was called!');
          break;
      case 'W':
          rover.direction = 'N';
          console.log('turnRight was called!');
          break;
      case 'E':
          rover.direction = 'S';
      default: 'N';
  }
   //console.log('turnRight was called!');
 }
  
 function moveForward(rover) {
   if (rover.direction == 'N'){
      rover.y--;
  } else if (rover.direction == 'S'){
      rover.y++;
  } else if (rover.direction == 'W') {
      rover.x--;
  } else if (rover.direction == 'E') {
      rover.x++;
  }
  console.log('moveForward was called');  
}
   

// iteracao 4

 function comands (rover, orders){ 
   for (let i = 0; i < orders.length; i++){

      let order = orders[i]
      
      switch (order) {
        case 'l':
            turnLeft(rover)
         break;

         case 'r':
            turnRight(rover)
         break;

         case 'f':
            moveForward(rove)
         break;

      default:
     console.log('Error, type a valid command');
      }
      rover.travelLog.push({'x':rover.x,'y':rover.y})
   }
   
      console.log(rover.travelLog)
}





//comands(rover,'rfff')



