import { useState } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
    //INTRO TO USESTATE HOOK
    // const [name, setName] = useState('Shiva');
    // const [age, setAge] = useState(19);
    // const handleClick = () => {
    //     setName("Sandeep");
    //     setAge(19);
    // }   

    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Lorem ipsum...', author: 'mario', id: 1},
        {title: 'My new App', body: 'Lorem ipsum...', author: 'yoshi', id: 2},
        {title: 'Welcome party', body: 'Lorem ipsum...', author: 'luigi', id: 3}
    ]);

    //PROPS
    return (
        <div className = "home">
            <Bloglist blogs={blogs} />
        </div>
    )
}

export default Home
