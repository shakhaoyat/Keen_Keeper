import React from 'react';

const Footer = () => {
      return (
            <div>
                  <footer className="footer footer-horizontal footer-center bg-accent-content text-primary-content p-10 container mx-auto">
                        <aside>

                              <h1 className="text-6xl font-bold">KeenKeeper</h1>
                              <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                        </aside>
                        <nav className="w-full">
                              <h2>Social Links</h2>
                              <div className="grid grid-flow-col gap-4">

                                    <a>
                                          <figure>
                                                <img src="/instagram.png" alt="daisyUI" className="" />
                                          </figure>
                                    </a>
                                    <a>
                                          <figure>
                                                <img src="/facebook.png" alt="daisyUI" className="" />
                                          </figure>
                                    </a>
                                    <a>
                                          <figure>
                                                <img src="/twitter.png" alt="daisyUI" className="" />
                                          </figure>
                                    </a>
                              </div>
                              <div className='flex justify-between items-center border-t border-base-200 pt-4 w-full mt-2'>
                                    < div >
                                          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                                    </div >
                                    <div ><ul className="flex gap-6 text-sm">
                                          <li><a href="#">Privacy Policy</a></li>
                                          <li><a href="#">Terms of Service</a></li>
                                          <li><a href="#">Cookies</a></li>
                                    </ul></div>
                              </div >
                        </nav >
                  </footer >
            </div >
      );
};

export default Footer;