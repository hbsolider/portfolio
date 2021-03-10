import React, { useState } from 'react';
import Input from 'components/Input';

export default function BxC1() {
  const [focus, setFocus] = useState(false);
  return (
    <div className="section">
      <div className="box-center">
        <Input
          placeholder="Input password here ..."
          onFocus={() => setFocus((pre) => !pre)}
          onBlur={() => setFocus((pre) => !pre)}
        />
        {focus && <div className="blink space text-center font1rem">Press enter</div>}
      </div>
    </div>
  );
}
