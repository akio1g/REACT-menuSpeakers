import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <img src="./images/SVCClogo.png" alt="SVCC Logo" />
                <h1>Silicon Valley Code Camp</h1>
                <div>
                    <h4>Hello <span>AKIO</span></h4>
                    <h4>sign-out</h4>
                </div>
            </header>
        )
    }
}

export default Header;