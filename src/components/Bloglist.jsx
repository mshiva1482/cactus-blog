import { Link } from "react-router-dom"

//DE-STRUCTURED PROPS
const Bloglist = ({ blogs, title }) => {
    //Here, handleDelete is a function that is passeed in as a prop for deleting a blog based on its id.
    //HandleDelete is defined within Home.jsx because the blogs array will be updated using setBlog (useState) so that it can be watched by react rather than deleting it manually.


    return (
        <div className="blog-list">
            <h1>{title}</h1>
            { blogs.map((blog) => (
                <div className="blog-preview" key = {blog.id}>
                    {/* KEY PROPERTY - used by react to keep track of each item in the DOM - must be unique. */}
                    <Link to = {`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2> 
                        <p>Written by {blog.auth}</p>
                    </Link>
                    {/*Function is put inside of an anonymous function because we are passing in blog.id as a parameter to the function.*/}
                </div>
            )) }      
        </div>
    )
}

export default Bloglist
