"use client"
import React from 'react'
import Image from "next/image";
import Button from "../ui/button";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const BlogHero = () => {
    const heroImg = "https://cdn.prod.website-files.com/63562d634d0d41468bad20d7/6358a6970f7983e6830d8732_Blog%20Thumbnail%20Image07.png"
  return (
    <section className='lg:flex'>
        <div className='flex-1'>
            <Image src={heroImg} alt="hero image" width={800} height={1000} />
        </div>
        <div className='space-y-6 p-8 flex-1 bg-secondary'>
            <h4>Home Improvement</h4>
            <h1>Ideas for Decorating an Open Concept Living Room</h1>
            <p>From publishing content and hoping to acquire leads to gaining audience insights and making personalized content, content marketing has come a long way.</p>
            <Button href="#" >
                Read More
                <ArrowForwardIcon />
            </Button>
            <Button variant="secondary" href="#">learn more</Button>
        </div>
    </section>
  )
}

export default BlogHero