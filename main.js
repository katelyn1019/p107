function modelloaded() {
    console.log("model is loaded");
}

function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
  var model = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/EEEk1x-6x/model.json",modelloaded);  
}
