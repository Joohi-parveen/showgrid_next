import Link from 'next/link';
import { Blog } from '@/data/blogs';

interface BlogFeaturedProps {
  blog: Blog;
}

export default function BlogFeatured({ blog }: BlogFeaturedProps) {
  return (
    <div className="blog-featured-card g-scale">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
          <div className="blog-featured-img-wrapper">
            <img src={blog.image} alt={blog.imageAlt} />
          </div>
        </div>
        <div className="col-lg-6 col-md-12 ps-lg-5">
          <div className="blog-featured-info">
            <div className="blog-post-meta">
              <span className="blog-category-badge">{blog.category}</span>
              <span>{blog.date}</span>
            </div>
            <h2 className="blog-featured-title">
              <Link href={`/blog-detail?slug=${blog.slug}`}>{blog.title}</Link>
            </h2>
            <p className="blog-featured-excerpt">{blog.excerpt}</p>
            <div className="btn-fill-primary">
              <Link href={`/blog-detail?slug=${blog.slug}`}>
                Read Article <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
