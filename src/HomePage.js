import BlogList from './BlogList';
import useFetch from './useFetch'; //importing custom hook useFetch to fetch data from db.json

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs'); //using useFetch hook to fetch data from db.json
    return ( 
        <div className="home">
            {error && <div>{ error }</div>}
            {isPending && <div className='loader'>Loading...</div>} {/* Conditional rendering: if isPending is true, show loading message */}
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>} {/* Conditional rendering: if blogs is not null, render BlogList */}
        </div>
     );
}
 
export default Home;