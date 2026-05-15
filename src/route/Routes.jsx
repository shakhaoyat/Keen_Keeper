import React from 'react';
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from '../layout/MainLayout';
import HomePage from '../pages/homePage';
import TimeLine from '../pages/timeLine';
import Status from '../pages/status';
import FriendDetails from '../Component/friendDetails/FriendDetails';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,

      },
      {
        path: "/timeline",
        element: <TimeLine></TimeLine>,
      },
      {
        path: "/status",
        element: <Status />
      },
      {
        path: "/frienddetails/:id",
        element: <FriendDetails />
      },
    ],
  },
]);

// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(
//   <RouterProvider router={router} />,
// );

// const Routes = () => {
//   return (
//     <div>

//     </div>
//   );
// };

// export default Routes;