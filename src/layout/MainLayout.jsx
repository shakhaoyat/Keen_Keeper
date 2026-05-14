import React from 'react';
import Navber from '../Component/navBer/Navber';
import { Outlet } from 'react-router';
import Footer from '../Component/footer/Footer';

const MainLayout = () => {
      return (
            <div>
                  <Navber></Navber>

                  <Outlet></Outlet>
                  <Footer></Footer>

            </div>
      );
};

export default MainLayout;