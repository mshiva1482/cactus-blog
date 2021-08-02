import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Shiva');
    const [age, setAge] = useState(19);
    const handleClick = () => {
        setName("Sandeep");
        setAge(19);
    }   

    return (
        <div className = "home">
            <h2>{ name } is { age } years old</h2>
            <button onClick ={handleClick}>Next</button>
        </div>
    )
}

export default Home
