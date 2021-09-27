import React from 'react';

import NavBar from '../components/Navbar';

function Home(props) {

    return (
        <div>
            <NavBar email={props.nombre} />
        </div>
    );


}
export default Home;