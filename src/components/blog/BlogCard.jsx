

import Image from 'next/image';
import Button from '../ui/button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const BlogCard = ({blog}) => {
  return (
    <Link href={`/blog/${blog.id}`}>
       <div className="w-full overflow-hidden rounded-2xl aspect-square object-cover">
         <Image  src={blog.image} alt={blog.title} width={800} height={800}
         className='h-full' />
       </div>
        <div>
            <h4>{blog.title}</h4>
            <div className='flex justify-between gap-2'>
                <p>{blog.category}</p>
                <p>{blog.readTime}</p>
            </div>
            
        </div>
        
    </Link>
  )
}

export default BlogCard