import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch"; // Custom hook to fetch data from the API

const BlogDetails = () => {
    const { id } = useParams(); // useParams hook is used to access the dynamic parameters from the URL, such as blog ID
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id); // Fetching blog details using the blog ID from the URL
    return ( 
        <div className="blog-details">
            {isPending && <div className="loader">Loading...</div>} {/* Display loading message while fetching data */}
            {error && <div>{error}</div>} {/* Display error message if there is an error fetching data */}
            {blog && (
                <article>
                    <h2>{blog.title}</h2> {/* Display blog title */}
                    <p>Written by {blog.author}</p> {/* Display blog author */}
                    <div>{blog.body}</div> {/* Display blog content */}
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;