'use strict'

var audioSource = document.querySelector('select#audioSource');
var audioOutput = document.querySelector('select#audioOutput');
var videoSource = document.querySelector('select#vedioSource');

if(!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices){
    console.log('no media device is supported');
}else {
    navigator.mediaDevices.enumerateDevices()
    .then(gotDevices)
    .catch(handleError);
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
    });
    
}

function handleError(){
    console.log('error');
}