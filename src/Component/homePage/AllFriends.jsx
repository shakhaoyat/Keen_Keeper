import React, { use } from 'react';

const friendsPromise = fetch('/friends.json').then(res => res.json());

const AllFriends = () => {
      const friends = use(friendsPromise);

      const statusBadge = {
            'overdue': 'badge bg-red-500 text-white px-4 py-3',
            'almost due': 'badge badge-warning text-white px-4 py-3',
            'on-track': 'badge bg-green-800 text-white border-none px-4 py-3',
      };

      return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-6 border-t container mx-auto" >
                  {friends.map(friend => (
                        <div className="card w-full bg-base-100 shadow-md border border-base-200">
                              <div className="card-body items-center text-center">

                                    <div className="avatar">
                                          <div className="w-20 rounded-full">
                                                <img
                                                      src={friend.picture}
                                                      alt="Profile"
                                                />
                                          </div>
                                    </div>

                                    <h2 className="card-title mt-2 text-xl font-bold">
                                          {friend.name}
                                    </h2>

                                    <p className="text-sm text-gray-400">{friend.days_since_contact}d ago</p>

                                    <div className="mt-3 flex flex-col gap-2">
                                          <span className="">
                                                {friend.tags.map(tag => (
                                                      <span className="badge badge-success badge-outline px-4 py-3 mr-2" key={tag}>{tag}</span>
                                                ))}
                                          </span>

                                          <div className="flex justify-center">
                                                <span className={statusBadge[friend.status]}>
                                                      {friend.status}
                                                </span>
                                          </div>
                                    </div>

                              </div>
                        </div>
                  ))}
            </div>
      );
};

export default AllFriends;