import React from "react";
import posts from "../data/posts";

const Blog = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">
      <header className="flex flex-col gap-3">
        <p className="text-sm text-[var(--muted)] uppercase tracking-[0.2em]">Newsletter / Blog</p>
        <h1 className="text-3xl md:text-4xl font-bold">Insights & Updates</h1>
        <p className="text-[var(--muted)]">Markdown-ready later. For now showing post cards with excerpts.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-2xl border border-[var(--border)] bg-[var(--card)]/70 p-6 backdrop-blur shadow-lg hover:-translate-y-1 transition"
          >
            <p className="text-xs uppercase text-[var(--muted)] tracking-[0.2em] mb-1">{post.date}</p>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-[var(--muted)] text-sm mb-3">By {post.author}</p>
            <p className="text-sm text-[var(--muted)] mb-4">{post.excerpt}</p>
            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
                <span key={`${post.slug}-${tag}`} className="px-3 py-1 rounded-full bg-[var(--pill)] text-xs text-[var(--muted)]">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
