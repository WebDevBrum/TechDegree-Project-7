import React from 'react';

/** Provides the user a friendly error message when incorrect route used */

const InvalidRoute = () => {
  console.log('Error 404: page not found');
  return (
    <ul>
      <li className="not-found">
        <h3>Sorry, there's nothing here</h3>
        <p>Error 404 page not found</p>
      </li>
    </ul>
  );
};

export default InvalidRoute;