function StartIdentification() {
    navigator.mediaDevices.getUserMedia({audio:true});

    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/c0aOlQ7hL/model.json', modelready );
}

function modelready() {
    classifier.classify(gotresults);
}

var img = document.getElementById('img');


function gotresults(error, results) {
    if(error) {
        console.error(error);
    }

    
    else {
        console.log(results);
        r = Math.floor(Math.random()*255)+1;
        g = Math.floor(Math.random()*255)+1;
        b = Math.floor(Math.random()*255)+1;

        document.getElementById("icanhear").innerHTML = "I can hear "+results[0].label;
        document.getElementById("accuracyresult").innerHTML = "Accuracy "+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("icanhear").style.color = "rgb("+r+", "+g+", "+b+")";
        document.getElementById("accuracyresult").style.color = "rgb("+r+", "+g+", "+b+")";

        if(results[0].label=="Meowing"){
            img.src="meowing.gif";
            
        }

        else if(results[0].label=="mooing"){
            img.src="cow-mooing.gif";
        }

        else {
            img.src="hearing.gif"
        };
       
    
    };

};
