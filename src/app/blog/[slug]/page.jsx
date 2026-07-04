import { notFound } from "next/navigation";
import BlogDetail from "@/components/blog/BlogDetail";

async function fetchBlogs(id) {
    const response = await fetch(`http://localhost:3000/api/blogs/${id}`);
    if(!response.ok){
        if (response.status === 404) return null;
        throw new Error("Failed to fetch blogs");
    }
    
    const data = await response.json();
    return data;
}

const BlogDetailPage = async ({params}) => {
    const {slug} = await params;
    const blogData = await fetchBlogs(slug); 
    
    if (!blogData) {
        notFound();
    }
    
  return (
    <div>
        <BlogDetail blog={blogData} />
    </div>
  )
}

export default BlogDetailPage