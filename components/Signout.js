import React from 'react';
import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';

function SignOut() {
    return (
        <div>
            <Button type="button" size="1g" className="copy-btn" onClick={signOut}>
              Sign out
            </Button>
        </div>
    );
}

export default SignOut;
