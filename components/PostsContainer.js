import Link from 'next/link'

export default function PostsContainer({ posts }) {
  return (
    <div className='grid gap-4 sm:grid-cols-2'>
      {posts.map((post) => (
        <Link
          href={`/post/${post.id}/${post.slug}`}
          className='w-full h-[400px] shadow hover:shadow-lg transition'
          key={post.id}
        >
          <img
            className='w-full h-[55%] object-cover'
            src={post.coverImage}
            alt={post.slug}
          />
          <div className='bg-white h-[45%] p-4 flex flex-col justify-between'>
            <div className=''>
              <h3 className='font-bold text-slate-800 mb-1'>{post.title}</h3>
              <h4 className='text-slate-600 text-sm'>{post.summary}</h4>
            </div>
            <div>
              <h4 className='border border-stone-400 rounded inline-block py-1 px-2 text-xs mb-2'>
                <span className='font-bold text-cyan-500'>#</span> {post.tag}
              </h4>

              <p className='text-xs text-slate-500'>
                {new Intl.DateTimeFormat('ko', { dateStyle: 'long' }).format(
                  new Date(post.createdAt)
                )}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
