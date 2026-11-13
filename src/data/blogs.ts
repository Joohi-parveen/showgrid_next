export interface Author {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  author?: Author;
}

export const featuredBlog: Blog = {
  id: "featured-1",
  title: "The Evolution of Credentials: From Paper to Cryptographic Ledgers",
  slug: "evolution-of-credentials",
  category: "Technology",
  date: "July 15, 2026",
  image: "images/blog-img-1.avif",
  imageAlt: "The Evolution of Credentials",
  excerpt: "Static PDFs are no longer enough to satisfy security requirements. We explore how cryptographic sealing and real-time ledger verification are replacing traditional paper documents to form a new standard of trust."
};

export const blogs: Blog[] = [
  {
    id: "blog-1",
    title: "How AI-Tagging is Bridging the Gap Between Academics & Industry",
    slug: "ai-tagging-education",
    category: "AI & Skills",
    date: "July 10, 2026",
    image: "images/blog-img-2.avif",
    imageAlt: "AI Tagging in Education",
    excerpt: "Discover how AI-tagged skills help translate traditional coursework into verifiable industry capabilities that employers can instantly understand.",
    author: {
      name: "Dr. Sarah Jenkins",
      role: "Director of Education",
      image: "images/blog-author.avif",
      imageAlt: "Author Dr. Sarah Jenkins"
    }
  },
  {
    id: "blog-2",
    title: "Why Traditional PDFs Fail the Verification Test for Modern Employers",
    slug: "traditional-pdfs-verification",
    category: "Security",
    date: "July 08, 2026",
    image: "images/blog-img-3.avif",
    imageAlt: "PDF Credentials vs Ledgers",
    excerpt: "Paper certificates and PDFs are prone to modification and fraud. Learn why direct-from-source ledger verification has become necessary.",
    author: {
      name: "Marcus Vance",
      role: "Securities Architect",
      image: "images/blog-author.avif",
      imageAlt: "Author Marcus Vance"
    }
  },
  {
    id: "blog-3",
    title: "Building Your Lifelong Learning Grid: A Guide for Students",
    slug: "learning-grid-guide",
    category: "Student Guide",
    date: "July 05, 2026",
    image: "images/blog-img-4.avif",
    imageAlt: "Learning Grid Guide",
    excerpt: "A walkthrough on how learners can group, organize, and showcase vocational, athletic, and academic certificates under a single profile.",
    author: {
      name: "Elena Rostova",
      role: "Community Manager",
      image: "images/blog-author.avif",
      imageAlt: "Author Elena Rostova"
    }
  }
];
