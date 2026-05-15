import React from 'react';

const friendFilter = () => {
      return (
            <div>
                  <details className="dropdown">
                        <summary className="btn m-1  w-52">Filter Timeline</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                              <li><a>Call</a></li>
                              <li><a>Text</a></li>
                              <li><a>Video</a></li>
                        </ul>
                  </details>
            </div>
      );
};

export default friendFilter;