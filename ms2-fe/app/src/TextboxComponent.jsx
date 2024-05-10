import React from 'react';

const TextboxComponent = () => {
  return (
    <div>
      {/* Large text box */}
      <input type="text" className="large-textbox" />

      {/* Medium text box */}
      <input type="text" className="medium-textbox" />

      {/* Small text box */}
      <input type="text" className="small-textbox" />
    </div>
  );
}

export default TextboxComponent;