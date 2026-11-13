import Link from 'next/link';
import { Blog } from '@/data/blogs';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <div className="blog-card g-fade-up">
      <div className="blog-card-img-wrapper">
        <img src={blog.image} alt={blog.imageAlt} />
      </div>
      <div className="blog-card-content">
        <div className="blog-post-meta">
          <span className="blog-category-badge">{blog.category}</span>
          <span>{blog.date}</span>
        </div>
        <h3 className="blog-card-title">
          <Link href={`/blog-detail?slug=${blog.slug}`}>{blog.title}</Link>
        </h3>
        <p className="blog-card-excerpt">{blog.excerpt}</p>
        {blog.author && (
          <div className="blog-card-author">
            <img src={blog.author.image} alt={blog.author.imageAlt} className="blog-author-img" />
            <div className="blog-author-info">
              <span className="blog-author-name">{blog.author.name}</span>
              <span className="blog-author-role">{blog.author.role}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
