import React from "react";
import { BurgerImg } from "../../images/BurgerImg";
import styles from "./header.css";

export function Header() {
  const handleClick = () => {
    console.log("Main page");
  };

  return <div className={styles.mainContainer}></div>;
}
