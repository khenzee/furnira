import Image from "next/image"


const BlogDetail = ({blog}) => {
    return (
    <section>
        <div>
            <div>
                <h4>{blog.category} </h4>
                <h1>{blog.title}</h1>
                <div>
                    <p>{blog.date}</p>
                    <p>{blog.readTime}</p>
                </div>
            </div>
            <div>
                <Image src= {blog.image} alt="blog image" width={500} height={500} />
            </div>
            <div>
                {blog.fullDetails}
            </div>
        </div>
    </section>
    )
}


export default BlogDetail