import { useState, useEffect } from 'react'; //importing useState and useEffect hooks from React

const useFetch = (url) => {
    const [data, setData] = useState(null); //initially blogs is set to null, it will be updated after fetching data from db.json
    const [isPending, setIsPending] = useState(true); //isPending is used to show loading state
    const [error, setError] = useState(null); //error state to handle any errors during fetching

    useEffect(() => {
        const abortCont = new AbortController(); //creating an AbortController to cancel the fetch request if the component unmounts
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal}) //fetching data from db.json
            .then(res => {
                if(!res.ok) {
                    throw Error('Could not fetch the data for that resource'); //thrwg error if response is not ok
                }
               return res.json(); //converting response to json
            })
            .then(data => {
                setData(data); //setting blogs state with the fetched data
                setIsPending(false); //setting isPending to false after data is fetched
                setError(null); //resetting error state to null after successful fetch
            })
            .catch(err => {
                if(err.name === 'AbortError') {
                    console.log('Fetch aborted'); //if fetch is aborted, log a message
                } else {
                    setIsPending(false); //setting isPending to false if there is an error
                    console.log(err.message); //log any other errors
                } 
            })
        }, 1000); //Simulating a delay of 1 second before fetching data
         return () => abortCont.abort(); //cleanup function to abort the fetch request if the component unmounts
    }, [url]); //useEffect will run when the component mounts or when the url changes

    return {data, isPending, error}; //returning data, isPending and error states
}
export default useFetch; //exporting useFetch hook to be used in other components