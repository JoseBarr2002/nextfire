import Link from 'next/link';

export default function Navbar() {
    const user = true;
    const username = true;

    return (
        <nav className="navbar">
            <ul>
                {/* item for any state */}
                <li>
                    <Link href="/">
                        <button className="btn-logo">FEED</button>
                    </Link>
                </li>

                {/* items for different states */}
                {/* user is signed in and has a username*/}
                {username && (
                    <>
                        <li className="push-left">
                            <Link href="/admin">
                                <button className="btn-blue">Write Post</button>
                            </Link>
                        </li>
                        <li>
                            <Link href={`/${username}`}>
                                <img src={user?.photoURl} />
                            </Link>

                        </li>
                    </>

                )}

                {/* user is NOT signed in OR has NOT created a username */}
                {!username && (
                    <li className="push-left">
                        <Link href="/enter">
                            <button className="btn-blue">Log in</button>
                        </Link>
                    </li>

                )}
            </ul>
        </nav>
    );
}