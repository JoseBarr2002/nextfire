// app/enter/page.js
'use client';

import { auth, googleAuthProvider, signInWithPopup, signOut } from '../../lib/firebase';
import { useState, useEffect } from 'react';

export default function EnterPage() {
    //calling in our hooks from react... what is its anatomy? why do we set useState to null? When does it update? why are we allowed to use the same hook twice?
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState(null);

    //Can you explain to me why we have so many anonymous functions? what is set user a function of on stateChanged? 
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => { setUser(user) });
        return unsubscribe; // is unsubscribe a listener? What is a listener and what does it mean to unmount it?
    }, []);//what are the two arguments? Specifically, what would go in the square brackets? What is the anatomy of this useEffect? What parameters does it take in?

    return (
        //what determines if user or username is true or false? Are UsernameForm and SignoutButton components I created in React?
        <main>
            {user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton />}
        </main>
    ); //Why is return a functions???

    //sign in with Google button
    function SignInButton() {
        //can you please explain the anatomy of signInWithGoogle? Why do we use async? What does it mean to await for something? Why these arguments?
        const signInWithGoogle = async () => { await signInWithPopup(auth, googleAuthProvider); };

        return (
            //what does src do and why does it take a script as an argument? What does it do with this argument?
            <button className="btn-google" onClick={signInWithGoogle}>
                <img src={'/google.png'} alt="Google Logo" /> Sign in with Google
            </button>
        );
    }

    //Sign out button
    function SignOutButton() {

        const handleSignOut = async () => { await signOut(auth); };

        //why isn't what we returned wrapped in parenthesis?
        return <button onClick={handleSignOut}>Sign Out</button>;
    }

    function UsernameForm() {
        return null;
    }

}