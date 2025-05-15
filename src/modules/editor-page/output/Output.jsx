import { useState } from 'react';
import styles from './output.module.css'

const CodeEditor = ({output = ""}) => {

  return (
    <div className={styles.codeEditor}>
        <div className={styles.outputBar}>
          Output
        </div>
        <div>
            {output}
        </div>
    </div>
  );
};

export default CodeEditor;
