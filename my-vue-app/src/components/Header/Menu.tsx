import * as React from 'react';
import styles from "./Header.module.css"


export const Tabs = () => {
  return (
    <>
    <div className={styles.tabs}>
      <p className={styles.tabsParagraphs}>Home</p>
      <p className={styles.tabsParagraphs} >Bikes</p>
      <p className={styles.tabsParagraphs} >Gear</p>
      <p className={styles.tabsParagraphs} >Parts</p>
      <p className={styles.tabsParagraphs}>Tires</p>
      <p  className={styles.tabsParagraphs}>Service-info</p>
      <p className={styles.tabsParagraphs} >Catalogues</p>
      <p className={styles.tabsParagraphs} >Contact</p>
    </div>
    </>
  )
}