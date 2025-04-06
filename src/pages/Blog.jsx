import { Link } from 'react-router-dom';

const posts = [
  {
    slug: "my-first-post",
    title: "How I Got Back Into Web Development After a Career Break",
    summary: "The story of how I re-entered tech after caring for a family member, and what I learned along the way."
  },
  {
    slug: "why-i-love-react",
    title: "Why I Love React and Tailwind for Building Modern Websites",
    summary: "A quick look at why this stack makes building UIs enjoyable and productive."
  }
];

function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="space-y-8">
        {posts.map(post => (
          <div key={post.slug} className="border-b pb-6">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-gray-700">{post.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
