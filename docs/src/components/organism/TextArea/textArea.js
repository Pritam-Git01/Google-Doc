import React from 'react';
import styles from './textArea.module.css';

const TextArea = () => {
  return (
    <>
    <div
    id='myDiv'
    contentEditable={true}
    spellCheck={false}
    className={styles.textArea}>

    </div>
    </>
  )
}

export default TextArea