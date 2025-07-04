import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch"; // custom hook to fetch data from API

const BlogDetails = () => {
    const { id } = useParams(); // useParams hook to access the dynamic parameters from URL, such as blog ID
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id); // fetching blog details using blog ID from URL
    const history = useHistory(); // useHistory hook to programmatically navigate to different routes
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE' // DELETE request to the server to remove the blog
        }).then(() => {
            history.push('/'); // redirecting to home page after deletion
            console.log('Blog deleted');
        }) 
    }
    return ( 
        <div className="blog-details">
            {isPending && <div className="loader">Loading <span className="dots"></span></div>} {/* display loading message while fetching data */}
            {error && <div>{error}</div>} {/* display error message if there is an error fetching data */}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;