import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

//useState hook re-renders the DOM everytime a change in state is observed.
//useEffect takes a function as a parameter and does not return any data - It invokes the function everytime the DOM is rendered.
//Never use set function (of useState) within a useEffect function as it would  lead  to an infite loop of DOM re-renders.

const Home = () => {
    //INTRO TO USESTATE HOOK
    // const [name, setName] = useState('Shiva');
    // const [age, setAge] = useState(19);
    // const handleClick = () => {
    //     setName("Sandeep");
    //     setAge(19);
    // }   
    
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    //useEffect can have state variables as dependencies (put into one sigle array) - this would mean the function will be triggered once in the beginning and everytime the state of the mentioned variable changes. 
    //Currently this effect runs only once in the beginning when the DOM is rendered.
    useEffect( () => {
        fetch('http://localhost:8000/blogs').then(res => {
            return res.json();
        }).then(data => {
            setBlogs(data);
        });
    }, []);
    //PROPS
    //EXAMPLE for reusable components in React
    return (
        <div className = "home">
            {blogs && <Bloglist blogs={blogs} title = "All blogs" handleDelete = {handleDelete}/>}
            {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title = "Mario's blogs"/> */}

            <button onClick={() => setName('luigi')}>Change name</button>
            <h3>{ name }</h3>
        </div>
    )
}

export default Home
