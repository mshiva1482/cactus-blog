//DE-STRUCTURED PROPS
const Bloglist = ({ blogs }) => {
    // const blogs = props.blogs;

    //KEY PROPERTY - used by react to keep track of each item in the DOM - must be unique
    return (
        <div className="blog-list">
            { blogs.map((blog) => (
                <div className="blog-preview" key = {blog.id}>
                   <h2>{blog.title}</h2> 
                   <p>Written by {blog.author}</p>
                </div>
            )) }            
        </div>
    )
}

export default Bloglist
