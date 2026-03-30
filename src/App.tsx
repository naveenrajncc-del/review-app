import { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import ReviewList from './components/ReviewList';
import { useReview } from './hooks/useReview';
import LineHighlighter from './components/LineHeightlighter';

const App = () => {
  const [code, setCode] = useState('');
  const { reviews, loading, error, runReview } = useReview();

  const handleSubmit = (input: string) => {
    setCode(input);
    runReview(input);
  };

  return (
    <div>
      <h1>AI Code Reviewer</h1>

      <CodeEditor onSubmit={handleSubmit} />

      {loading && <p>Analyzing...</p>}
      {error && <p>{error}</p>}

      <LineHighlighter code={code} reviews={reviews} />
      <ReviewList reviews={reviews} />
    </div>
  );
};

export default App;