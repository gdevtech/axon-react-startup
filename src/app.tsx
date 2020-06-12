import React from 'react';
import { color, CSSReset } from './styles';

const App: React.FC = () => {
  return (
    <>
      <CSSReset />
      <div className="wrapper">
        <h1 style={{ color: color.primary }}>Hello React</h1>
      </div>
    </>
  );
};

export default App;
