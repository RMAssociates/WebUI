import React from 'react';
import NavigationBar from './subComponents/navigationBar.jsx';

 export default function Header(props) {
  return (
    <div>
<p className="text-primary"> Hello I am Header </p>
<NavigationBar />
</div>
  );
}