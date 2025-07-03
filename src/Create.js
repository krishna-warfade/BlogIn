import {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState(''); // State to hold the blog title
    const [body, setBody] = useState(''); // State to hold the blog body
    const [author, setAuthor] = useState('mario'); // State to hold the blog author, defaulting to 'mario'
    const [isPending, setIsPending] = useState(false); // State to manage loading state
    const history = useHistory(); // Hook to programmatically navigate after form submission

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior "refreshing the page"
        const blog = { title, body, author }; // Create a blog object with the current state values
        setIsPending(true); // Set loading state to true while the request is being processed
        // Send a POST request to the server to add a new blog
        
        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers: {"Content-Type": "application/json"}, // Set the content type to JSON
            body: JSON.stringify(blog) // Convert the blog object to a JSON string
        }).then(() => {
            console.log('new blog added');
            setIsPending(false); // Set loading state to false after the request is complete
            // history.go(-1); // Navigate back to the previous page
            history.push('/'); // Redirect to the home page after adding the blog
        })
    }
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <input 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Addding Blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;