import { useEffect, useState } from "react";
import styles from "./ImageSlider.module.css";

export const ImageSlider = () => {
  const [activeImage, setActiveImage] = useState("group-photo.jpg");

  const images = [
    "Emma1.jpg",
    "Ruth1.jpg",
    "Praise1.jpg",
    "women-in-energy.jpg",
    "group1.jpg",
    "group2.jpg",
    "group3.jpg",
    "group4.jpg",
    "group5.jpg",
    "group6.jpg",
    "group7.jpg",
    "gis1.jpg",
    "gis2.jpg",
    "gis3.jpg",
    "gis4.jpg",
    "gis5.jpg",
    "gis6.jpg",
    "gis7.jpg",
    "gis8.jpg",
    "gis9.jpg",
    "gis10.jpg",
    "gis11.jpg",
    "reservoir-challenge.jpg",
    "voice1.jpg",
    "voice2.jpg",
    // "voice3.jpg",
    // "voice4.jpg",
    "voice5.jpg",
    "voice6.jpg",
    "voice7.jpg",
    "voice8.jpg",
    "bsg1.jpg",
    "bsg2.jpg",
    "bsg3.jpg",
    "bsg4.jpg",
    "bsg5.jpg",
    "bsg6.jpg",
    "bsg7.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const currentIndex = images.indexOf(activeImage);

      const nextIndex = (currentIndex + 1) % images.length;

      setActiveImage(images[nextIndex]);
    }, 2000);

    return () => clearInterval(timer);
  }, [activeImage, images]);

  return (
    <div className={styles["image-slider-container"]}>
      {/* <div className={styles["group-photo-container"]}> */}
      <img src={activeImage} alt="" className={styles["person"]} />
      {/* </div> */}
    </div>
  );
};
