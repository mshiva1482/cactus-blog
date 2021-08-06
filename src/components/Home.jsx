import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

//useState hook re-renders the DOM everytime a change in state is observed.
//useEffect takes a function as a parameter and does not return any data - It invokes the function everytime the DOM is rendered.
//Never use set function (of useState) within a useEffect function as it would  lead  to an infite loop of DOM re-renders.

const Home = () => {

    //useEffect can have state variables as dependencies (put into one sigle array) - this would mean the function will be triggered once in the beginning and everytime the state of the mentioned variable changes. 
    //Currently this effect runs only once in the beginning when the DOM is rendered.

    const {data: blogs, isPending} = useFetch('http://localhost:8000/blogs');

    return (
        <div className = "home">
            { isPending && <div>Loading...</div>}
            { /* Here logical and (&&) is used to check if the array 'blogs' is null or not */ }
            {blogs && <Bloglist blogs={blogs} title = "All blogs"/> }
        </div>
    )
}

export default Home
