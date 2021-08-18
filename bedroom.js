
img="";
status="";
objects=[];
function preload()
{
img = loadImage("CA-020jpg-Bedroom.jpg");
}

function setup() 
{
    canvas = createCanvas(640,420);
    canvas.center();

}

function draw(){
image(img , 0, 0 , 640 , 420);

        fill("#FF0000");
        text("Bed" , 125 , 70);
        noFill();
        stroke("#FF0000");
        rect(120 ,19 ,450  , 350);
    }


function logout(){

    window.location="index.html";
}