import React from 'react';
import { FaPlus } from 'react-icons/fa';
import AllFriends from '../Component/homePage/AllFriends';

const homePage = () => {
      return (
            <div>
                  <div>
                        <div className="hero bg-base-200 min-h-100 container mx-auto">
                              <div className="hero-content text-center">
                                    <div className="max-w-full">
                                          <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                                          <p className="py-6">
                                                Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                                                relationships that matter most.
                                          </p>
                                          <button className="btn text-base-100 bg-accent-content"><FaPlus />Add a Friend</button>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 container mx-auto ">
                        <div className="card w-full bg-base-100 card-xl shadow-sm">
                              <div className="card-body items-center text-center">
                                    <h2 className="card-title items-center ">Xlarge Card</h2>
                                    <p>Total Frienda</p>
                                    <div className="justify-end card-actions">

                                    </div>
                              </div>
                        </div>
                        <div className="card w-full bg-base-100 card-xl shadow-sm">
                              <div className="card-body items-center text-center">
                                    <h2 className="card-title items-center ">Xlarge Card</h2>
                                    <p>Total Frienda</p>
                                    <div className="justify-end card-actions">

                                    </div>
                              </div>
                        </div>
                        <div className="card w-full bg-base-100 card-xl shadow-sm">
                              <div className="card-body items-center text-center">
                                    <h2 className="card-title items-center ">Xlarge Card</h2>
                                    <p>Total Frienda</p>
                                    <div className="justify-end card-actions">

                                    </div>
                              </div>
                        </div>
                        <div className="card w-full bg-base-100 card-xl shadow-sm">
                              <div className="card-body items-center text-center">
                                    <h2 className="card-title items-center ">Xlarge Card</h2>
                                    <p>Total Frienda</p>
                                    <div className="justify-end card-actions">

                                    </div>
                              </div>
                        </div>
                  </div>

                  <div>
                        <AllFriends />
                  </div>


            </div>
      );
};

export default homePage;