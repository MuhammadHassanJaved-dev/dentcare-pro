import { ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

export default function BlogSection() {
  return (
    <section id="blog" className="py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="section-label justify-center mb-4 reveal-up">Latest News</div>
          <h2 className="font-display text-4xl xl:text-5xl font-extrabold text-secondary leading-[1.2] mb-4 reveal-up delay-100">
            Dental Health <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed reveal-up delay-200">
            Stay informed with the latest dental health tips, news and insights from our experts.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {BLOG_POSTS.map((post, i) => (
            <article
              key={i}
              className={`bg-white rounded-2xl overflow-hidden border border-slate-100 hover:-translate-y-2 hover:shadow-primary hover:border-primary/20 transition-all duration-400 group reveal-up`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Image */}
              <div className={`h-[220px] bg-gradient-to-br ${post.gradient} relative overflow-hidden flex items-center justify-center`}>
                <span className="text-7xl opacity-40 group-hover:scale-110 transition-transform duration-400">
                  {post.icon}
                </span>
                <div className="absolute bottom-4 left-4 bg-primary text-white px-3 py-1.5 rounded-lg text-xs font-bold">
                  {post.date}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wide mb-3">
                  {post.tag}
                </span>
                <h3 className="font-bold text-secondary text-[17px] leading-snug mb-3">{post.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                >
                  Read More <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
