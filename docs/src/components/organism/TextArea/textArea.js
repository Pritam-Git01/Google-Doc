import React from 'react';
import styles from './textArea.module.css';

const TextArea = () => {
  return (
    <div className={styles.wraper}>
    <div
    id='myDiv'
    contentEditable={true}
    spellCheck={false}
    className={styles.textArea}>

    </div>
    </div>
  )
}

export default TextArea