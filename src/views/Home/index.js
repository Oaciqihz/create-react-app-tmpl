import { Link } from 'react-router-dom';


export default function Home(params) {
    
    return (
        <div>
            <Link to="/blog">
                go  Blog
            </Link>
            <h1>Home</h1>
        </div>
    )
}