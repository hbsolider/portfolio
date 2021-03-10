import { memo } from 'react';
import Header from './Header';

export const Private = memo(({ children }) => {
  return (
    <div className="layout">
      <Header></Header>
      <div className="content">{children}</div>
    </div>
  );
});

export default Private;
