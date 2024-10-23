// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from '../../components/common/Header/Header';
import Footer from '../../components/common/Footer/Footer';
import { Outlet } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer />
        </>
    );
};

export default Layout;
