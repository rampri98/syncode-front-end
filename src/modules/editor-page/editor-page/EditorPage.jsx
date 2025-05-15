import styles from './editor-page.module.css'
import CodeEditor from '../code-editor/CodeEditor';
import Output from '../output/Output'
import { useParams } from 'react-router-dom';

const EditorPage = () => {
  const lang = "java"

  return (
    <div className={styles.editorPage}>
      <div className={`${styles.split} ${styles.left}`}>
        <CodeEditor lang = {lang}/>
      </div>
      <div className={`${styles.split} ${styles.right}`}>
        <Output />
      </div>
    </div>
  );
}
export default EditorPage;