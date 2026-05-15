import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../Component/context/FriendContext';



const Status = () => {
      const { storedCalls, storedTexts, storedVideos } = useContext(FriendContext);
      // #region Sample data
      const data = [
            { name: 'Calls', value: storedCalls.length, fill: '#0088FE' },
            { name: 'Texts', value: storedTexts.length, fill: '#00C49F' },
            { name: 'Videos', value: storedVideos.length, fill: '#FFBB28' },

      ];



      return (
            <div className="container mx-auto py-8 space-y-6">
                  <h2 className='font-bold text-black text-4xl'>Friendship Analytics</h2>
                  <div className="justify-center items-center container mx-auto py-8 space-y-6 my-2 shadow">
                        <h2 className='font-bold text-accent-content text-xl ml-7'>By Interaction Type</h2>
                        <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', margin: "auto", aspectRatio: 1 }} responsive>
                              <Pie
                                    data={data}
                                    innerRadius="80%"
                                    outerRadius="100%"
                                    // Corner radius is the rounded edge of each pie slice
                                    cornerRadius="50%"
                                    fill="#8884d8"
                                    // padding angle is the gap between each pie slice
                                    paddingAngle={5}
                                    dataKey="value"
                                    isAnimationActive={true}
                              />
                              <Legend />
                              <Tooltip />
                        </PieChart>
                  </div>
            </div>
      );
};

export default Status;