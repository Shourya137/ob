
img="";
status="";
objects=[];
function preload()
{
img = loadImage("istockphoto-539439778-1024x1024.jpg");
}

function setup() 
{
    canvas = createCanvas(640,420);
    canvas.center();

}

function draw(){
image(img , 0, 0 , 640 , 420);

        fill("#FF0000");
        text("Bottles" , 45 ,170);
        noFill();
        stroke("#FF0000");
        rect(30 , 150, 450  , 250);

        fill("#FF0000");
        text("Strawerry" , 150 ,120);
        noFill();
        stroke("#FF0000");
        rect(135 , 100, 250 , 100);
    }


function logout(){

    window.location="index.html";
}