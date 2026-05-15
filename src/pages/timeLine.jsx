import { useContext, useEffect, useState } from 'react';
import { FriendContext } from '../Component/context/FriendContext';
import CallImg from '/call.png';
import TextImg from '/text.png';
import VideoImg from '/video.png';
import FriendFilter from '../Component/friendFilter';


const TimeLine = () => {
      const { storedCalls, storedTexts, storedVideos } = useContext(FriendContext);
      const [friends, setFriends] = useState([]);

      useEffect(() => {
            fetch('/friends.json')
                  .then(res => res.json())
                  .then(data => setFriends(data));
      }, []);

      const getFriendName = (id) => friends.find(friend => friend.id === id)?.name || `Friend #${id}`;

      const activityConfig = {
            call: {
                  label: 'Call',
                  icon: CallImg,
                  source: storedCalls,
            },
            text: {
                  label: 'Text',
                  icon: TextImg,
                  source: storedTexts,
            },
            video: {
                  label: 'Video',
                  icon: VideoImg,
                  source: storedVideos,
            },
      };

      const activityRows = Object.entries(activityConfig).flatMap(([type, config]) =>
            config.source.map(item => ({
                  type,
                  id: item.id,
                  label: config.label,
                  icon: config.icon,
                  createdAt: item.createdAt,
            })),
      );



      return (
            <div className="container mx-auto py-8 space-y-6">
                  <h1 className="text-3xl font-bold">Timeline</h1>
                  <FriendFilter />

                  {activityRows.length === 0 ? (
                        <div className="card bg-base-100 shadow">
                              <div className="card-body">
                                    <p>No timeline activity yet.</p>
                              </div>
                        </div>
                  ) : (
                        <div className="space-y-3">
                              {activityRows.map(activity => {
                                    const verbs = {
                                          call: 'has been called',
                                          text: 'has been texted',
                                          video: 'has been video called',
                                    };

                                    return (
                                          <div key={`${activity.type}-${activity.id}`} className="card bg-base-100 shadow-sm border border-base-200">
                                                <div className="card-body py-4 flex-row items-center gap-4">
                                                      <img
                                                            src={activity.icon}
                                                            alt={activity.label}
                                                            className="h-9 w-9 object-contain shrink-0"
                                                      />
                                                      <div>
                                                            <div className="font-medium">
                                                                  {getFriendName(activity.id)} {verbs[activity.type]}
                                                            </div>
                                                            <div className="text-sm text-base-content/60">
                                                                  {activity.createdAt ? new Date(activity.createdAt).toLocaleDateString() : ''}
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    );
                              })}
                        </div>
                  )}
            </div>
      );
};

export default TimeLine;