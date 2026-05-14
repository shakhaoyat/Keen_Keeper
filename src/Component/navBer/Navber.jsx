import React from 'react';
import { NavLink } from 'react-router';
import { RiHome2Line } from "react-icons/ri";
import { CiClock2 } from 'react-icons/ci';
import { GoGraph } from 'react-icons/go';

const Navber = () => {
      const Links = <>
            <li><NavLink to="/" className={({ isActive }) => `font-semibold mr-1 ${isActive ? "text-base-100 border border-accent-content btn-accent-content bg-success-content" : ""}`}><RiHome2Line /> Home</NavLink></li>
            <li><NavLink to="/timeline" className={({ isActive }) => `font-semibold mr-1 ${isActive ? "text-base-100 border border-accent-content btn-accent-content bg-success-content" : ""}`}><CiClock2 />Timeline</NavLink></li>
            <li><NavLink to="/status" className={({ isActive }) => `font-semibold mr-1 ${isActive ? "text-base-100 border border-accent-content btn-accent-content bg-success-content" : ""}`}><GoGraph /> Status</NavLink></li>

      </>
      return (
            <div>
                  <div className="navbar bg-base-100 shadow-sm container mx-auto">
                        <div className="flex-1">
                              {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                              <figure>
                                    <img src="/logo.png" alt="daisyUI" className="" />
                              </figure>
                        </div>
                        <div className="flex-none">
                              <ul className="menu menu-horizontal px-1">
                                    {Links}

                              </ul>
                        </div>
                  </div>
            </div>
      );
};

export default Navber;