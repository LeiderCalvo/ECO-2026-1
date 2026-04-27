

import { handleMotionEvent } from "./accelerometer-visualizer.js";


const initMotionEvents = () => {
  window.addEventListener("devicemotion", (e) => {
    // DO NOT SPAM
    // EMIT EVENT TO SERVER WITH VALUES -> consider using a debouncer to send that data to the server or just send after the condition
    // socket.emit("acc", { acceleration, rotationRate });

    handleMotionEvent(e)
  });
}

// ------------- GYROSCOPE SENSOR

// Request permission and initialize motion event on user interaction (e.g., button click)
async function requestSensorUsage() {
  if (window.DeviceMotionEvent) {
    if (typeof DeviceMotionEvent.requestPermission === "function") {
      DeviceMotionEvent.requestPermission()
        .then((permissionState) => {
          if (permissionState === "granted") {
            initMotionEvents()
          } else {
            alert("Permission to access device motion data denied.");
          }
        })
        .catch(alert);


      // try {
      //   const permissionState = await DeviceMotionEvent.requestPermission()
      //   if (permissionState === "granted") {
      //     initMotionEvents()
      //   } else {
      //     alert("Permission to access device motion data denied.");
      //   }
      // } catch (error) {
      //   alert(error)
      // }


    } else {
      initMotionEvents()
    }
  } else {
    alert("DeviceMotionEvent is not supported by this browser.");
  }
}

document
  .getElementById("acceletometer-button")
  .addEventListener("click", requestSensorUsage);
