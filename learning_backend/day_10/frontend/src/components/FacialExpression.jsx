import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";
import "./facialExpression.css";
import axios from "axios";

export default function FacialExpression({ setSongs }) {
  const videoRef = useRef();

  const loadModels = async () => {
    const MODEL_URL = "/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => console.error("Error accessing webcam: ", err));
  };

  const detectMood = async () => {
    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    if (!detections || detections.length === 0) {
      console.log("No face detected!");
      return;
    }

    let mostProbableExpression = 0;
    let mostExpression = "";

    for (const expression of Object.keys(detections[0].expressions)) {
      if (detections[0].expressions[expression] > mostProbableExpression) {
        mostProbableExpression = detections[0].expressions[expression];
        mostExpression = expression;
      }
    }

    console.log(mostExpression);
    axios
      .get(`http://localhost:3500/songs?mood=${mostExpression}`)
      .then((response) => {
        console.log(response.data);
        setSongs(response.data.songs)
      });
  };

  useEffect(() => {
    loadModels().then(startVideo);
  }, []);

  return (
    <div className="mood-element">
      <video ref={videoRef} autoPlay muted className="user-video-feed" />
      <button onClick={detectMood}>Detect Mood</button>
    </div>
  );
}
