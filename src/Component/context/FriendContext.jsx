import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const FriendContext = createContext();


const FriendProvider = ({ children }) => {
      const [storedCalls, setStoredCalls] = useState([]);
      const [storedTexts, setStoredTexts] = useState([]);
      const [storedVideos, setStoredVideos] = useState([]);

      const handleCall = (id) => {
            const isExistCall = storedCalls.find(call => call.id === id);

            if (isExistCall) {
                  toast.error("You have already called this friend!");
                  return;
            }

            setStoredCalls([...storedCalls, { id }]);
            toast.success("Call initiated!");
      };

      const handleText = (id) => {
            const isExistText = storedTexts.find(text => text.id === id);

            if (isExistText) {
                  toast.error("You have already texted this friend!");
                  return;
            }

            setStoredTexts([...storedTexts, { id }]);
            toast.success("Text initiated!");
      };

      const handleVideo = (id) => {
            const isExistVideo = storedVideos.find(video => video.id === id);

            if (isExistVideo) {
                  toast.error("You have already video called this friend!");
                  return;
            }

            setStoredVideos([...storedVideos, { id }]);
            toast.success("Video call initiated!");
      };

      const data = {
            handleCall,
            handleText,
            handleVideo,
            storedCalls,
            storedTexts,
            storedVideos,
      };

      return (
            <FriendContext.Provider value={data}>
                  {children}
            </FriendContext.Provider>
      );
};

export default FriendProvider;