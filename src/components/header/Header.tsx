import React from 'react';

const Header = (props: React.PropsWithChildren) => {
  const {children} = props;
  return (
    <div className="header">
      <div className="header__content">
        {children}
      </div>
    </div>
  );
};

export default Header;
