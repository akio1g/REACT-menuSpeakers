import React from 'react';
import withAuth from './withAuth';

function Header({ login, setLogin }) {

    function Login({ login, setLogin }) {
        return (
            <>
                <h4>Hello <span>{login}</span></h4>
                <button
                    onClick={() => {
                        setLogin("");
                    }
                    }>
                    Log Out
                </button>
            </>

        )
    }

    function LogOut({ login, setLogin }) {
        return (
            <button onClick={(e) => {
                e.preventDefault();
                const username = window.prompt("Enter Login:", "");
                setLogin(username);
            }}>Log In</button>
        )
    }

    return (
        <header>
            <img src="./images/SVCClogo.png" alt="SVCC Logo" />
            <h1>Silicon Valley Code Camp</h1>
            <div>
                {login ? 
                    <Login login={login} setLogin={setLogin} /> : 
                    <LogOut login={login} setLogin={setLogin} />
                }
            </div>
        </header>
    )
}

export default withAuth(Header);