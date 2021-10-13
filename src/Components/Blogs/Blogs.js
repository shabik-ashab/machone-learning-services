import React, {useEffect,useState} from 'react';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setblogs] = useState([]);
    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setblogs(data));
    }, []);
    return (
        <div>
           <header className="text-center mt-5">
                <h5 className="text-primary">News & Blogs</h5>
                <h1 className="w-75 ">company News & Updates Read All
                     Related Blog
                </h1>
            </header>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5 ms-3 me-3">
                {
                    blogs.map(blog => <Blog
                        Key = {blog.id}
                        course={blog}
                    ></Blog>)
                }
            </div>
        </div>
    )
}

export default Blogs;
