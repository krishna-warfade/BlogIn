import { useState, useEffect } from 'react'; //useEffect is used to perform side effects in function components
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null); //initially blogs is set to null, it will be updated after fetching data from db.json
    const [isPending, setIsPending] = useState(true); //isPending is used to show loading state
    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/blogs') //fetching data from db.json
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data for that resource'); //thrwg error if response is not ok
                }
               return res.json(); //converting response to json
            })
            .then(data => {
                setBlogs(data); //setting blogs state with the fetched data
                setIsPending(false); //setting isPending to false after data is fetched
            })
            .catch(err => {
                console.log(err.message); //logging error message if any error occurs during fetching
            })
        }, 1000); //Simulating a delay of 1 second before fetching data
    }, []);
    return ( 
        <div className="home">
            {isPending && <div className='loader'>Loading...</div>} {/* Conditional rendering: if isPending is true, show loading message */}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>} {/* Conditional rendering: if blogs is not null, render BlogList */}
        </div>
     );
}
 
export default Home;