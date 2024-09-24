mode = 0; //You can set global variable that will be visible to your entire application



//setup() runs only once, it is where you should create your initial canvas
function setup() {
  createCanvas(400, 400);
}


//draw() runs repeatedly as your application is active, here we use the mode variable to determine which example to run
function draw() {
  clear();
  background('pink');
  //if the mode is 0, show the menu
  //initially we set mode to 0 so the menu is shown first
  if (mode == 0) {
    drawMenu();
  }
  //if the mode is ever changed, show the corresponding example
  if (mode == 1) {
    ExampleOne();
  }
  if (mode == 2) {
    ExampleTwo();
  }
  if (mode == 3) {
    ExampleThree();
  }
  if (mode == 4) {
    ExampleFour();
  }
}

//here is the function that draws the menu to the screen
function drawMenu() {

  //textSize is used to change fontSize for all calls to text that are below it, here the textSize call on line 42 affects line 43
  textSize(20)
  text("Click an example!", 110, 40)

  //the following textSize affects all the remaining text below it
  textSize(10)


  // Drawing a rectangle at location (100, 100) with a width of 200 and height of 30.
  rect(100, 100, 200, 30);
  text("Example One: Basic Shapes", 100, 110);

  rect(100, 150, 200, 30);
  text("Example Two: Typing", 100, 160);

  rect(100, 200, 200, 30);
  text("Example Three: Randomness", 100, 210);

  rect(100, 250, 200, 30);
  text("Example Four: Bonus", 100, 260);
}

//function that is fired whenver the mouse is clicked
//use mouseX and mouseY to get the click's coordinates
function mouseClicked() {
  if (mode == 0) {
    if (mouseX > 100 && mouseX < 300) {
      if (mouseY > 100 && mouseY < 130) {
        console.log("Example1");
        mode = 1;
      }
      if (mouseY > 150 && mouseY < 180) {
        console.log("Example2");
        mode = 2;
      }
      if (mouseY > 200 && mouseY < 230) {
        console.log("Example3");
        mode = 3;
      }
      if (mouseY > 250 && mouseY < 280) {
        console.log("Example4");
        mode = 4;
      }
    }
  }
}

function ExampleOne() {

  strokeWeight(4);
  stroke('green');
  fill('yellow');

  circle(200, 100, 50);

  stroke('blue');
  rect(100, 100, 25, 125); w
}


function ExampleTwo() {
  fill('Gray')
  textSize(50);
  if (isKeyPressed) {
    charPressed = String.fromCharCode(keyCode)
    text(charPressed, 100, 100)
  }
}


function ExampleThree() {
  x = random(400)
  y = random(400)
  circle(x, y, 50);
}



//these variables are used in Example 4
targetWord = "WORLD" //a word for the user to type
currWord = "" //the succesful letters the user has typed so far
targetCharIndex = 0; //the letter the user needs to type next
charPressed = "" //the letter the user actually pressed

function ExampleFour() {
  print('game 4')
  fill('Black')
  textSize(30);
  text(targetWord, 200, 200)

  if (targetCharIndex == targetWord.length) {
    textSize(30)
    fill('Green')
    text(currWord, 200, 250)
    return
  }

  if (isKeyPressed) {


    if (charPressed == targetWord.charAt(targetCharIndex)) {
      currWord += charPressed
      targetCharIndex++;
      textSize(30)
      fill('Green')
      text(currWord, 200, 250)
    }

    else {
      textSize(30)
      if (charPressed != "") {
        fill('Red')
      }
      else {
        fill('Green')
      }
      text(currWord + charPressed, 200, 250)
    }
    charPressed = ""
  } 
}
