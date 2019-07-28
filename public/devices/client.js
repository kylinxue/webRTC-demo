'use strict'

if(!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices){
    console.log('devices is not supported');
}else{
    navigator.mediaDevices.enumerateDevices()
        .then(gotDevices)
        .catch(handleError);
}

function gotDevices(deviceInfos){
    deviceInfos.forEach(function(deviceInfo){
        console.log(deviceInfo.kind + 
            '; label: ' + deviceInfo.label +
            '; deviceId: ' + deviceInfo.deviceId +
            '; groupId: ' + deviceInfo.groupId);
    })
}

function handleError(err){
    console.log(err.name + ' : ' + error.message);
}