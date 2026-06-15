import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '../../../data/projects';

export function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);
  if (!project) notFound();

  const idx = projects.indexOf(project);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="min-h-screen bg-black text-white">

      {/* Nav mini */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-display text-xl text-white tracking-[0.15em] hover:text-[#16a34a] transition-colors duration-200">
            TA
          </Link>
          <Link
            href="/#projects"
            className="font-body text-[10px] text-white/35 uppercase tracking-[0.2em] hover:text-white transition-colors duration-200 flex items-center gap-2"
          >
            ← Retour
          </Link>
        </div>
      </div>

      {/* Cover image */}
      <div className="relative h-[55vh] sm:h-[65vh] overflow-hidden">
        <img
          src={project.cover}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-3xl">

          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-[#16a34a]" />
            <span className="font-body text-[10px] text-[#16a34a] uppercase tracking-[0.25em]">
              {project.category}
            </span>
            <span className="text-white/15">·</span>
            <span className="font-body text-[10px] text-white/25 uppercase tracking-[0.2em]">
              {project.year}
            </span>
          </div>

          {/* Titre */}
          <h1
            className="font-display text-white mb-3 leading-[0.9]"
            style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
          >
            {project.title}
          </h1>
          <p className="font-body text-sm text-white/30 uppercase tracking-[0.2em] mb-12">
            {project.client}
          </p>

          {/* Description */}
          <p className="font-body text-base text-white/55 leading-[1.9] mb-14">
            {project.description}
          </p>

          {/* Divider */}
          <div className="h-px bg-white/[0.06] mb-10" />

          {/* Outils */}
          <div className="mb-16">
            <p className="font-body text-[10px] text-white/20 uppercase tracking-[0.25em] mb-5">
              Outils utilisés
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tools.map(t => (
                <span
                  key={t}
                  className="font-body text-[11px] text-white/35 uppercase tracking-wider px-3 py-1.5 border border-white/[0.08]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <a
            href="mailto:tomallano83@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-[#14532d] hover:bg-[#166534] font-body text-[11px] text-white uppercase tracking-[0.2em] transition-all duration-300"
          >
            Démarrer un projet similaire
            <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>

      {/* Projet suivant */}
      <div className="border-t border-white/[0.06]">
        <Link
          href={`/projets/${next.slug}`}
          className="group block max-w-6xl mx-auto px-6 lg:px-8 py-12 sm:py-16"
        >
          <p className="font-body text-[10px] text-white/20 uppercase tracking-[0.25em] mb-4">
            Projet suivant
          </p>
          <div className="flex items-center justify-between">
            <h3
              className="font-display text-white group-hover:text-[#16a34a] transition-colors duration-200 leading-none"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}
            >
              {next.title}
            </h3>
            <span className="text-white/20 group-hover:text-[#16a34a] group-hover:translate-x-2 transition-all duration-200 text-2xl">
              →
            </span>
          </div>
        </Link>
      </div>
    </main>
  );
}
