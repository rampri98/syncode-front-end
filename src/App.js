import JoinPage from './modules/join-page/join-page/JoinPage'
import EditorPage from './modules/editor-page/editor-page/EditorPage'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<JoinPage />} />
        <Route path="/:id" element={<EditorPage />} />
      </Routes>
    </>
  );
}

export default App;
