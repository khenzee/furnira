import BlogCat from "@/components/blog/BlogCat";
import BlogHero from "@/components/blog/BlogHero";


async function fetchBlogs() {
    const response = await fetch("http://localhost:3000/api/blogs");
    if(!response.ok){
        throw new Error("Failed to fetch blogs");
    }
    const data = await response.json();
    return data;
}

async function Blog() {
    const data = await fetchBlogs();
    return(
        <div>
            <BlogHero />
            <BlogCat data={data} />
        </div>
    )
}
export default Blog;