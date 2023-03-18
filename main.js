function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/ztUq9aAKK/model.json", modelLoaded);
}

function modelLoaded() {
    classifier.classify(gotResult);
}