import { getGithubProfile, getGithubRepos } from "@/lib/github";
import { Star, GitFork, BookMarked, ArrowUpRight } from "lucide-react";

export default async function Dashboard() {
  const profile = await getGithubProfile();
  const repos = await getGithubRepos();

  if (!profile) return null;

  return (
    <section id="dashboard" className="relative bg-[#010504] py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 section-grid opacity-20" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            04 / Dashboard
          </p>
          <h2 className="mt-2 text-4xl font-bold tracking-tighter text-white md:text-5xl">
            Real-time Stats
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* GitHub Profile Bento */}
          <div className="md:col-span-2 rounded-3xl border border-emerald-900/30 bg-emerald-950/20 p-8 flex flex-col justify-between backdrop-blur-sm group hover:border-emerald-500/30 transition-colors">
            <div className="flex justify-between items-start">
              <div className="h-14 w-14 rounded-2xl overflow-hidden border-2 border-emerald-500/20">
                <img src={profile.avatar_url} alt={profile.name} className="h-full w-full object-cover" />
              </div>
              <a href={profile.html_url} target="_blank" className="p-2 rounded-full bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.09.68-.216.68-.48 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.893 1.53 2.341 1.088 2.91.833.09-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.944 0-1.09.39-1.98 1.03-2.676-.103-.254-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.75-1.026 2.75-1.026.546 1.376.202 2.392.1 2.646.64.696 1.03 1.586 1.03 2.676 0 3.842-2.337 4.687-4.565 4.935.359.31.679.92.679 1.852 0 1.336-.012 2.416-.012 2.747 0 .266.18.575.688.478A10.013 10.013 0 0022 12c0-5.52-4.48-10-10-10z" /></svg>
              </a>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
              <p className="text-emerald-100/60 font-mono text-sm">@{profile.login}</p>
              <p className="mt-4 text-emerald-100/40 text-sm leading-relaxed max-w-sm">
                {profile.bio || "Fullstack Developer building products with Next.js & TypeScript."}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-emerald-900/30 pt-6">
              <div className="text-center">
                <p className="text-xl font-bold text-emerald-400">{profile.public_repos}</p>
                <p className="text-[10px] uppercase tracking-wider text-emerald-100/40">Repos</p>
              </div>
              <div className="text-center border-x border-emerald-900/30 px-2">
                <p className="text-xl font-bold text-emerald-400">{profile.followers}</p>
                <p className="text-[10px] uppercase tracking-wider text-emerald-100/40">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-emerald-400">{profile.following}</p>
                <p className="text-[10px] uppercase tracking-wider text-emerald-100/40">Following</p>
              </div>
            </div>
          </div>

          {/* Contribution Graph Placeholder (Link to image/service) */}
          <div className="md:col-span-2 rounded-3xl border border-emerald-900/30 bg-emerald-950/20 p-8 backdrop-blur-sm group hover:border-emerald-500/30 transition-colors">
            <div className="flex items-center gap-2 mb-6">
              <BookMarked className="h-4 w-4 text-emerald-400" />
              <h4 className="text-sm font-semibold text-emerald-100/60 uppercase tracking-widest">Contributions</h4>
            </div>
            <div className="aspect-[2/1] w-full bg-emerald-950/50 rounded-2xl flex items-center justify-center overflow-hidden">
               <img 
                 src={`https://ghchart.rshah.org/10b981/${profile.login}`} 
                 alt="GitHub Contributions" 
                 className="w-full h-auto px-4 opacity-80 hover:opacity-100 transition-opacity invert hue-rotate-[140deg] brightness-125"
               />
            </div>
            <p className="mt-4 text-[11px] text-emerald-100/30 text-center font-mono italic">
              Real-time contribution activity from GitHub.
            </p>
          </div>

          {/* Top Repositories */}
          {repos.slice(0, 4).map((repo: any) => (
            <a 
              key={repo.id} 
              href={repo.html_url} 
              target="_blank"
              className="rounded-3xl border border-emerald-900/30 bg-emerald-950/20 p-6 backdrop-blur-sm group hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <BookMarked className="h-5 w-5 text-emerald-400 group-hover:text-slate-950 transition-colors" />
                <ArrowUpRight className="h-4 w-4 text-emerald-100/20 group-hover:text-slate-950 transition-colors" />
              </div>
              <h4 className="font-bold text-white group-hover:text-slate-950 transition-colors truncate">{repo.name}</h4>
              <p className="mt-2 text-xs text-emerald-100/40 group-hover:text-slate-900/70 line-clamp-2 transition-colors h-8">
                {repo.description || "No description provided."}
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 group-hover:text-slate-950 transition-colors uppercase">
                  <Star className="h-3 w-3" />
                  {repo.stargazers_count}
                </div>
                <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 group-hover:text-slate-950 transition-colors uppercase">
                  <GitFork className="h-3 w-3" />
                  {repo.forks_count}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
