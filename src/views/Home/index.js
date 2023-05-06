import { Link } from 'react-router-dom';
import { Web3Button } from '@web3modal/react';

export default function Home(params) {
    
    return (
        <div>
            <Web3Button />
            <Link to="/blog">
                go  Blog
            </Link>
            <h1>Home</h1>
        </div>
    )
}