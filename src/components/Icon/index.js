import React from "react";
import ICONS from "../../constants/icons";
import * as styles from "./Icon.module.scss";

const Icon = ({ name, icon }) => (
  <svg className={styles.icon} viewBox={icon.viewBox || "0 0 24 24"} aria-hidden="true">
    <title>{name}</title>
    <path d={icon.path || ""} />
  </svg>
);

export default Icon;
