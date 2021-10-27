NoseX=0;
NosseY=0;
function preload() {

}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(400, 400);

    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}

function modelLoaded() {
    console.log("model loaded!!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        NoseX=results[0].pose.nose.x;
        NoseY=results[0].pose.nose.y;
        console.log("nose x= "+NoseX);
        console.log("nose y= "+NoseY);
    }
}

function draw() {
    image(video, 0, 0, 400, 400);

    circle(NoseX,NoseY,20);
    fill("red");
}
function download_img() {
    save("clown.png")
}


