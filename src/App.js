import JoinPage from './modules/join-page/components/JoinPage'
import EditorPage from './modules/editor-page/components/EditorPage'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<JoinPage />} />
        <Route path="/join/:id" element={<EditorPage />} />
      </Routes>
    </>
  );
}

export default App;
