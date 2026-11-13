import { blogs, featuredBlog } from '@/data/blogs';
import BlogFeatured from '@/components/BlogFeatured';
import BlogCard from '@/components/BlogCard';
import BlogPagination from '@/components/BlogPagination';

export default function Blog() {
  return (
    <main>
      
      <section className="blog-hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-hero-content g-fade-up">
                <div className="blog-badge-tag">
                  <i className="bi bi-journal-text"></i> ShowGrid Insights
                </div>
                <h1 className="blog-heading-large">
                  Latest updates & <span>industry insights.</span>
                </h1>
                <p className="blog-hero-desc">
                  Explore articles, user guides, and research on digital credentials, cryptographic trust networks, and modern career architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <BlogFeatured blog={featuredBlog} />

          <div className="blog-posts-grid mt-5">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

          <BlogPagination />
        </div>
      </section>
    </main>
  );
}
