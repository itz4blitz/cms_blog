import React from 'react'
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({post}) => {
    console.log(post);
    return (
        <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
            <div className="relative overflow-hidden shadow-md pb-80 mb-6">
                <img src={post.featuredImage.url} alt={post.title} className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg: rounded-lg"/>
            </div>
            <h1 className="transition duration-700 text-center mb-8 cursor-pointer text-black hover:text-blue-600 text-3xl font-semibold">
                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>
            <div className="text-center flex justify-center align-middle mb-8 w-full">
                <div className="flex mr-8">
                    <div className="mr-2">
                    <img
                        alt={post.author.name}
                        height="30px"
                        width="30px"
                        className="align-middle rounded-full"
                        // issue with URL being null
                        src={post.author.photo.url}
                    />
                    </div>
                    <p className="inline align-middle text-gray-700 font-medium text-lg">{post.author.name}</p>
                </div>
                <div className="font-medium text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>
                        {moment(post.createdAt).format('MMM DD, YYYY')}
                    </span>
                </div>
            </div>
            <p className="text-center text-lg text-gray-700 font-normal pl-20 pr-20 mb-8">
                {post.excerpt}
            </p>
            <div className="text-center">
                <a className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-blue-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
                    Continue Reading
                </a>
            </div>
        </div>
    )
}

export default PostCard
