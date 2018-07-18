import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';

const SignOut = () => {
  return (
    <Link to={'/'}>
      <button
        className="btn btn-outline-dark"
        type="submit"
        value="Sign Out"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </Link>
  );
};

const handleSignOut = () => {
  auth.signOutUser().catch(err => {
    console.log(err);
  });
};

export default SignOut;
