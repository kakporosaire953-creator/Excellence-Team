import React, { useState } from 'react';
import { PageView, JournalArticle } from '../../types';
import { JOURNAL_ARTICLES } from '../../data/journal';
import { ArrowRight, ArrowLeft, Clock, Calendar, Share2, Check, BookOpen } from 'lucide-react';

interface JournalViewProps {
  onNavigate: (view: PageView) => void;
}

export const JournalView: React.FC<JournalViewProps> = ({ onNavigate }) => {
  const [activeArticle, setActiveArticle] = useState<JournalArticle | null>(null);
  const [copied, setCopied] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const categories = ['All', 'Company', 'Engineering', 'Cybersecurity', 'AI & Data'];

  const filteredArticles = categoryFilter === 'All'
    ? JOURNAL_ARTICLES
    : JOURNAL_ARTICLES.filter((a) => a.category === categoryFilter);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="journal-page" className="w-full pt-28 pb-24 bg-[#FAF8F6]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-[#0A0A0A]/10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#0A0A0A]/10 text-[10px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold mb-4">
          JOURNAL TECHNIQUE & NOTES D'INGÉNIERIE
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-[#0A0A0A] leading-tight uppercase">
          BUILD. BREAK. LEARN. PUBLISH<span className="text-[#FF4A16]">/</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#555555] max-w-2xl leading-relaxed">
          Retours d'expérience, décisions d'architecture logicielle, analyses de vulnérabilités et principes de gestion de systèmes développés sur le terrain.
        </p>

        {/* Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all cursor-pointer border rounded-[2px] ${
                categoryFilter === cat
                  ? 'bg-[#0A0A0A] text-white border-[#0A0A0A] shadow-xs'
                  : 'bg-white text-[#555555] border-[#0A0A0A]/10 hover:border-[#0A0A0A]/30'
              }`}
            >
              {cat === 'All' ? 'Tous les Articles' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {activeArticle ? (
          /* Full Article Reader View */
          <article className="max-w-3xl mx-auto bg-white border border-[#0A0A0A]/10 p-6 sm:p-10 shadow-xs rounded-[2px] animate-in fade-in duration-200">
            <button
              onClick={() => setActiveArticle(null)}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#656565] hover:text-[#0A0A0A] mb-8 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>RETOURNER AUX ARTICLES</span>
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold px-2 py-0.5 bg-[#FF4A16]/10">
                  {activeArticle.category}
                </span>
                <span className="text-xs font-mono text-[#656565] flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {activeArticle.date}
                </span>
                <span className="text-xs font-mono text-[#656565] flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {activeArticle.readTime}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-[#0A0A0A] tracking-tight leading-tight">
                {activeArticle.title}
              </h2>

              <div className="flex items-center justify-between py-4 border-y border-[#0A0A0A]/10 text-xs text-[#656565]">
                <div>
                  Par <strong className="text-[#0A0A0A]">{activeArticle.author}</strong> — {activeArticle.authorRole}
                </div>

                <button
                  onClick={handleShare}
                  className="flex items-center gap-1.5 text-xs text-[#0A0A0A] hover:text-[#FF4A16] cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Share2 className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Lien copié' : 'Partager'}</span>
                </button>
              </div>

              {/* Body Content */}
              <div className="pt-6 space-y-5 text-sm sm:text-base text-[#333333] leading-relaxed">
                {Array.isArray(activeArticle.content) ? (
                  activeArticle.content.map((p, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {p}
                    </p>
                  ))
                ) : (
                  <p className="leading-relaxed">{String(activeArticle.content)}</p>
                )}
              </div>

              {/* Bottom Note & CTA */}
              <div className="pt-8 mt-8 border-t border-[#0A0A0A]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#656565]">
                  Publication vérifiée par la Direction Technique d'Excellence Team.
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs font-bold text-[#FF4A16] hover:underline uppercase tracking-wider cursor-pointer"
                >
                  ÉCHANGER AVEC L'AUTEUR SUR UN PROJET →
                </button>
              </div>
            </div>
          </article>
        ) : (
          /* Articles Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="bg-white border border-[#0A0A0A]/10 hover:border-[#FF4A16] transition-all p-6 sm:p-7 flex flex-col justify-between cursor-pointer group shadow-2xs rounded-[2px]"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#656565] mb-3">
                    <span className="text-[10px] font-mono tracking-widest text-[#FF4A16] uppercase font-bold px-2 py-0.5 bg-[#FF4A16]/10">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0A0A0A] group-hover:text-[#FF4A16] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#555555] mt-3 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-[#0A0A0A]/10 flex items-center justify-between text-xs">
                  <span className="text-[#656565]">
                    {article.date} • {article.author}
                  </span>

                  <span className="font-bold text-[#FF4A16] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    LIRE <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
