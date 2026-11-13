import Link from 'next/link';

export default function BlogPagination() {
  const pages = [1, 2, 3];

  return (
    <div className="blog-pagination g-fade-up">
      {pages.map((page, idx) => (
        <Link
          key={page}
          href="#"
          className={`blog-page-btn ${idx === 0 ? 'active' : ''}`}
        >
          {page}
        </Link>
      ))}
      <Link href="#" className="blog-page-btn">
        <i className="bi bi-chevron-right"></i>
      </Link>
    </div>
  );
}
