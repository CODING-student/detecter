var stat="";
var thanksgiving="";
rubix=[];
function setup(){
    turkey=createCanvas(380,380);
    turkey.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    brek=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("BREAK").innerHTML="status : detecting objects.";
}
function preload(){
    thanksgiving=loadImage("dog_cat.jpg");
}
function draw(){
    image(video,0,0,380,380);
    if(thanksgiving !=""){
        r = random(255);
        g = random(255);
        b = random(255);
        brek.detect(video,gotResult);
        for(a=0;a < rubix.length;a++){
            document.getElementById("BREAK").innerHTML="status: object detected";
            document.getElementById("icevream").innerHTML="number of objects that are detected is: " + rubix.length;
            fill(r,g,b);
            cube=floor(rubix[a].confidence * 100);
            text(rubix[a].label + " " + cube + "%",rubix[a].x+20, rubix[a].y+20);
            noFill();
            stroke(r,g,b);
            rect(rubix[a].x, rubix[a].y,rubix[a].width,rubix[a].height);
        }
    }
}
function modelLoaded(){
    console.log("model is loaded");
    stat=true;
}
function gotResult(error, result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        rubix=result;
    }
}