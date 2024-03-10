// src/components/Breadcrumb.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const paths = location.pathname.split('/').filter((path) => path !== '');

  return (
    <div className="text-gray-300 flex pt-32 items-center justify-center">
      {paths.length > 0 && (
        <ul className="flex m-4 space-x-2  text-4xl dark:text-gray-600">
          {paths.map((path, index) => (
            <li key={path}>
              <Link to={`/${paths.slice(0, index + 1).join('/')}`} className={index === paths.length - 1 ? 'font-bold' : ''}>
                {path}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Breadcrumb;
