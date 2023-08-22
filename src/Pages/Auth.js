import React from 'react';
const Auth = () => {
    return (
        <div className="card-bg">
            <h2>Login Required</h2>
            <hr />
            <form>
                <input type="email" id="email" placeholder="Enter Email" label="Email" />
                <input type="password" id="password" placeholder="Enter Password" label="Password" />
                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
}
export default Auth;