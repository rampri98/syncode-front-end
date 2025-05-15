import { useState } from 'react';
import Editor from '@monaco-editor/react';
import styles from './code-editor.module.css';

const CodeEditor = ({lang = ""}) => {
  const [code, setCode] = useState('// write your code here');

  return (
    <div className={styles.codeEditor}>
        <div>
          <div className={styles.lang}>{lang.toUpperCase()}</div>
          <button className={styles.compileBtn}>
              Compile
          </button>
        </div>
        <Editor
            height="100%"
            defaultLanguage={lang}
            defaultValue="// type here"
            options={{
                scrollBeyondLastLine: false,
                minimap: { enabled: false },
                wordWrap: 'on',
            }}
        />
    </div>
  );
};

export default CodeEditor;
