import Head from 'next/head'
import { PostCard, Categories, PostWidget } from '../components/';

const posts = [
  { title: 'React Testing', excerpt: 'Learn React Testing'},
  { title: 'React with Tailwind', excerpt: 'Learn React with Tailwind'},
];

export default function Home() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Justin Scroggins - Software Engineer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="lg:col-span-8 col-span-1">
        {posts.map((post, index) => (
          <div>
            {post.title}
            {post.excerpt}
          </div>
        ))}
        </div>
      </div>
      <div className="lg:col-span-4 col-span-1">
        <div className="lg:sticky relative top-8">

        </div>
      </div>
    </div>
  )
}
