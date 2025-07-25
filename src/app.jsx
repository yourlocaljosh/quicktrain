import React, { useState } from 'react';

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  
  return (
    <div>
      <header>
        <h1>quicktrain</h1>
      </header>
      <main>
        {currentStep === 1 && <div>Step 1 Content</div>}
        {currentStep === 2 && <div>Step 2 Content</div>}
        {currentStep === 3 && <div>Step 3 Content</div>}
      </main>
    </div>
  );
};

export default App;