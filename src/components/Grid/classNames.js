import styles from "./flexboxgrid2.scss";

export default function getClass(className) {
  return styles && styles[className] ? styles[className] : className;
}
