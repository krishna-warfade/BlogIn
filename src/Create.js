import {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState(''); // state to hold the blog title
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario'); // defaulting to 'mario'
    const [isPending, setIsPending] = useState(false); // state to manage loading state
    const history = useHistory(); // hook to programmatically navigate after form submission

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent "refreshing the page"
        const blog = { title, body, author }; // create blog object with current state values
        setIsPending(true); // set loading state to true while the request is being processed
        
        fetch('http://localhost:8000/blogs',{
            method:'POST', // HTTP method to create a new resource
            headers: {"Content-Type": "application/json"}, // set content type to JSON
            body: JSON.stringify(blog) // convert blog object to a JSON string
        }).then(() => {
            console.log('new blog added');
            setIsPending(false); // set loading state to false after the request is complete
            // history.go(-1); // navigate back to the previous page
            history.push('/'); // redirect to the home page after adding blog
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
                {isPending && <button disabled>Addding Blog <span className="dots"></span></button>}
            </form>
        </div>
     );
}
 
export default Create;