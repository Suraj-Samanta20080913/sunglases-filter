x=0;
y=0;
function preload(){
glasses=loadImage('https://i.postimg.cc/MZgTgj2n/Sunglasses-PNG-File-removebg-preview.png');
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO );
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video. modelLoaded);
    poseNet.on('pose',gotPoses);
}

function save1(){
    save('Filtered.png');
}
function modelLoaded(){
    console.log('PoseNet Is Been Initialized');
}
function gotPoses(results){
    if(results.length >0)
    {
        console.log(results);
        x= results[0].pose.nose.x;
        y= results[0].pose.nose.y;
        console.log("nose x ="+ results[0].pose.nose.x);
        console.log("nose y ="+ results[0].pose.nose.y); 
    }

}
function draw(){
    image(video,0,0,300,300);
    image(glasses,x,y,100,50);
   }