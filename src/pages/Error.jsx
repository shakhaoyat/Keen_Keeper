import React from 'react';
import { Link } from 'react-router';


const Error = () => {
      return (
            <div style={{
                  minHeight: '60vh',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 16,
                  textAlign: 'center',
                  padding: '2rem'
            }}>
                  <h1 className='text-accent-content text-6xl font-bold'>404</h1>
                  <p className='text-accent-content'>Sorry — the page you are looking for cannot be found.</p>
                  <div style={{ marginTop: 12 }}>
                        <Link to="/" className='btn bg-accent-content text-base-100 '>Go to Home</Link>
                  </div>
            </div>
      );
};

export default Error;