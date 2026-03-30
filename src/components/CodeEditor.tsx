import { useState } from 'react';

type Props = {
  onSubmit: (code: string) => void;
};

const CodeEditor = ({ onSubmit }: Props) => {
  const [code, setCode] = useState('');
console.log('CodeEditor rendered with code: ', code);
console.log('CodeEditor rendered with code: ', code);

  return (
    <div>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={20}
        cols={100}
        placeholder="Paste your code..."
      />

      <button onClick={() => onSubmit(code)}>Run AI Review</button>
    </div>
  );
};

export default CodeEditor;