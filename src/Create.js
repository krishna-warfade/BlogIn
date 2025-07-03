import {useState} from 'react';
const Create = () => {
    const [title, setTitle] = useState(''); // State to hold the blog title
    const [body, setBody] = useState(''); // State to hold the blog body
    const [author, setAuthor] = useState('mario'); // State to hold the blog author, defaulting to 'mario'
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
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
                <select>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;