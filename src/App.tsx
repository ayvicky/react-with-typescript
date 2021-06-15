import React from 'react';

import { TextField } from './TextField';

const App: React.FC = () => {
  return (
    <div>
      <TextField text="Hi there" person={{firstName: 'ABC', lastName: 'XYZ'}} />
    </div>
  );
}

export default App;
