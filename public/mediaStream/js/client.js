'use strict'

function start(){
    if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
        console.log('getUserMedia is not supported');
    }else{
        var constraints = {
            video:{
                // width:320,
                // height:240,
                frameRate:30,
                facingMode:'user'  // 使用前置摄像头
            },
            audio:{
                noiseSuppression:true,
                echoCancellation:true
            }
        };
        navigator.mediaDevices.getUserMedia(constraints)
            .then(gotMediaStream)
            .then(gotDevices)
            .catch(handleError);
    }
}

function gotMediaStream(stream){
    videoplay.srcObject = stream;
    
    return navigator.mediaDevices.enumerateDevices();
}

function gotDevices(deviceInfos){
    deviceInfos.forEach(function(deviceInfo){
        var option = document.createElement('option');
        option.text = deviceInfo.label;
        option.value = deviceInfo.deviceId;
        if(deviceInfo.kind === 'audioinput'){
            audioSource.appendChild(option);
        }else if (deviceInfo.kind === 'audiooutput'){
            audioOutput.appendChild(option);
        }else if (deviceInfo.kind === 'vedioinput'){
            videoSource.appendChild(option);
        }
    })
}

function handleError(error){
    console.log('getUserMedia error: ', error);
}

var audioSource = document.querySelector('select#audioSource');
var audioOutput = document.querySelector('select#audioOutput');
var videoSource = document.querySelector('select#vedioSource');
var videoplay = document.querySelector('video#player');

var filters = document.querySelector('select#filter');

start();

vedioSource.onchange = start;
filters.onchange = function(){
    videoplay.className = filters.value;
}