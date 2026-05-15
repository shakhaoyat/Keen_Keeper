import React, { use } from 'react';
import { BiMessageDots } from 'react-icons/bi';
import { FiPhoneCall } from 'react-icons/fi';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { HiOutlineArchiveBox, HiOutlineBellSnooze } from 'react-icons/hi2';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useParams } from 'react-router';


const friendsPromise = fetch('/friends.json').then(res => res.json());

const FriendDetails = () => {
      const { id } = useParams();
      const friends = use(friendsPromise);
      // console.log(params);
      const expectedFriend = friends.find(friend => friend.id == id);
      console.log(expectedFriend);

      const statusBadge = {
            'overdue': 'badge bg-red-500 badge-sm text-white px-4 py-3',
            'almost due': 'badge badge-warning badge-sm text-white px-4 py-3',
            'on-track': 'badge bg-green-800 text-white badge-sm border-none px-4 py-3',
      };

      return (
            <div className="container mx-auto py-6">
                  {/* <div className="grid grid-flow-col grid-rows-3 gap-4 bg-amber-100">
                        <div className="row-span-3 ... bg-fuchsia-500">01</div>
                        <div className="col-span-2 ... bg-amber-400">02</div>
                        <div className="col-span-2 row-span-2 ... bg-amber-950">03</div>
                  </div> */}

                  <div className="container mx-auto p-6 bg-base-200 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                              {/* Left Profile Card */}
                              <div className="space-y-3">
                                    <div className="card bg-base-100 shadow border border-base-300">
                                          <div className="card-body items-center text-center">
                                                <div className="avatar">
                                                      <div className="w-20 rounded-full">
                                                            <img
                                                                  src={expectedFriend.picture}
                                                                  alt={expectedFriend.name}
                                                            />
                                                      </div>
                                                </div>

                                                <h2 className="font-bold text-lg">{expectedFriend.name}</h2>

                                                <div>
                                                      <div className="mt-3 flex flex-col gap-2">

                                                            <div className="flex justify-center">
                                                                  <span className={statusBadge[expectedFriend.status]}>
                                                                        {expectedFriend.status}
                                                                  </span>
                                                            </div>

                                                            <span className="">
                                                                  {expectedFriend.tags.map(tag => (
                                                                        <span className="badge badge-success badge-sm mr-2 " key={tag}>{tag}</span>
                                                                  ))}
                                                            </span>


                                                      </div>

                                                </div>

                                                <p className="text-sm italic text-gray-500">
                                                      "{expectedFriend.bio} "
                                                </p>

                                                <p className="text-xs text-gray-400">
                                                      Preferred: {expectedFriend.email}
                                                </p>
                                          </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <button className="btn w-full justify-center">
                                          <HiOutlineBellSnooze /> Snooze 2 Weeks
                                    </button>

                                    <button className="btn  w-full justify-center">
                                          <HiOutlineArchiveBox /> Archive
                                    </button>

                                    <button className="btn  text-red-500 w-full justify-center">
                                          <RiDeleteBin6Line /> Delete
                                    </button>
                              </div>

                              {/* Right Content */}
                              <div className="lg:col-span-2 justify-center space-y-16">

                                    {/* Stats */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">

                                          <div className=" stat bg-base-100 shadow border border-base-300 rounded-box">
                                                <div className="stat-value text-accent-content text-3xl text-center">{expectedFriend.days_since_contact}</div>
                                                <div className="stat-desc text-center">
                                                      Days Since Contact
                                                </div>
                                          </div>

                                          <div className="stat bg-base-100 shadow border border-base-300 rounded-box">
                                                <div className="stat-value text-accent-content text-3xl text-center">{expectedFriend.goal}</div>
                                                <div className="stat-desc text-center">
                                                      Goal (Days)
                                                </div>
                                          </div>

                                          <div className="stat bg-base-100 shadow border border-base-300 rounded-box">
                                                <div className="stat-value text-accent-content text-2xl text-center">
                                                      {expectedFriend.next_due_date}
                                                </div>
                                                <div className="stat-desc text-center">
                                                      Next Due
                                                </div>
                                          </div>
                                    </div>

                                    {/* Relationship Goal */}
                                    <div className="card bg-base-100 shadow border border-base-300">
                                          <div className="card-body">
                                                <div className="flex justify-between items-center">
                                                      <h2 className="card-title text-base">
                                                            Relationship Goal
                                                      </h2>

                                                      <button className="btn btn-xs btn-outline">
                                                            Edit
                                                      </button>
                                                </div>

                                                <p className="text-sm">
                                                      Connect every <span className="font-bold">{expectedFriend.goal} days</span>
                                                </p>
                                          </div>
                                    </div>

                                    {/* Quick Check-In */}
                                    <div className="card bg-base-100 shadow border border-base-300">
                                          <div className="card-body">
                                                <h2 className="card-title text-base mb-2">
                                                      Quick Check-In
                                                </h2>

                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                                                      <button className="btn bg-gray-100 h-20 flex-col">
                                                            <FiPhoneCall />

                                                            <span>Call</span>
                                                      </button>

                                                      <button className="btn bg-gray-100 h-20 flex-col">
                                                            <BiMessageDots />
                                                            <span>Text</span>
                                                      </button>

                                                      <button className="btn bg-gray-100 h-20 flex-col">
                                                            <GoDeviceCameraVideo />

                                                            <span>Video</span>
                                                      </button>

                                                </div>
                                          </div>
                                    </div>

                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default FriendDetails;