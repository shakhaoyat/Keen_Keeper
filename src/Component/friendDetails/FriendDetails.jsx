import React from 'react';
import { useParams } from 'react-router';

const FriendDetails = () => {
      const params = useParams();
      console.log(params);
      return (
            <div>
                  hello friend details
            </div>
      );
};

export default FriendDetails;