import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch"; // Custom hook to fetch data from the API

const BlogDetails = () => {
    const { id } = useParams(); // useParams hook is used to access the dynamic parameters from the URL, such as blog ID
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id); // Fetching blog details using the blog ID from the URL
    const history = useHistory(); // useHistory hook is used to programmatically navigate to different routes
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE' // Sending a DELETE request to the server to remove the blog
        }).then(() => {
            history.push('/'); // Redirecting to the home page after deletion
            console.log('Blog deleted');
        }) 
    }
    return ( 
        <div className="blog-details">
            {isPending && <div className="loader">Loading <span className="dots"></span></div>} {/* Display loading message while fetching data */}
            {error && <div>{error}</div>} {/* Display error message if there is an error fetching data */}
            {blog && (
                <article>
                    <h2>{blog.title}</h2> {/* Display blog title */}
                    <p>Written by {blog.author}</p> {/* Display blog author */}
                    <div>{blog.body}</div> {/* Display blog content */}
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;