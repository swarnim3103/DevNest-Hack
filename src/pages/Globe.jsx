import React from 'react';
import Nav from '../sections/Nav.jsx';
import Footer from '../sections/Footer.jsx';
import GlobeStruct from '../pages/GlobeStruct.jsx';

const Globe= () => {
    return(
        <>
        <Nav page="globe"/>
        <div>
      <GlobeStruct />
    </div>
        <Footer />
        </>
    );
}
export default Globe;