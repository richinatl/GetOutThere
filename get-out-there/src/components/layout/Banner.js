import React from "react";
import classes from "./Banner.module.css";

function Banner() {
  return (
    <section className={classes.hero__image}>
      <ul className={classes.ul__banner}>
        <li className={classes.li__banner}>Fun</li>
        <li className={classes.li__banner}>Music</li>
        <li className={classes.li__banner}>Food</li>
        <li className={classes.li__banner}>Adventure</li>
      </ul>
    </section>
  );
}

export default Banner;
