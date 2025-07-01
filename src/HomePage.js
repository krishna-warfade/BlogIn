import { useState, useEffect } from 'react'; //useEffect is used to perform side effects in function components
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id); //to store the blogs in array except the one with the id that is passed
        setBlogs(newBlogs);
    };
    useEffect(() => {
        console.log('useEffect ran'); //this will run after the any component is rendered
        console.log(blogs);
    }, []);
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            {/* <BlogList blogs={blogs.filter((blog) =>blog.author==="mario")} title="Mario's Blogs"/> */}
            </div>
     );
}
 
export default Home;