"use client"
import  {useState} from "react";
import BlogCard from "./BlogCard";


const BlogCat =  ({data}) => {
    const [selectedCat, setSelectedCat] = useState("all");
    const filterBlogs = selectedCat === "all" ? data : data.filter((blog )=> blog.category === selectedCat);

  return (
    <section>
        <h1>Sort By Category</h1>
        <div>
            <div className="flex gap-4 py-12">
                <button onClick={()=> setSelectedCat("all")} >All Categories</button>
                <button onClick={()=> setSelectedCat("Home Furniture")} >Home Furniture</button>
                <button onClick={()=> setSelectedCat("Decor Tips")} >Decor Tips</button>
                <button onClick={()=> setSelectedCat("Home Improvement")} >Home Improvement</button>         
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterBlogs.map((blog, index) => {return (
                    <div key={index}>
                        <BlogCard key={blog.id} blog={blog} />
                    </div>
                )})}
            </div>
        </div>
    </section>
  )
}

export default BlogCat