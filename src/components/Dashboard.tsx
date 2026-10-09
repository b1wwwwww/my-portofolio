import Image from "next/image";
import { getGithubProfile, getGithubRepos, type GithubRepo } from "@/lib/github";
import { getGithubContributions, transformContributionData } from "@/lib/contributions";
import { ContributionSkylineWrapper } from "@/components/ContributionSkylineWrapper";
import { Star, GitFork, BookMarked, ArrowUpRight } from "lucide-react";

export default async function Dashboard() {
  const profile = await getGithubProfile();
  const repos = await getGithubRepos();
  const contributions = await getGithubContributions("b1wwwwww");

  if (!profile) return null;

  const contributionData = contributions ? transformContributionData(contributions) : null;

  return (
    <section id="dashboard" className="relative py-24 md:py-32 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400">
            04 — Dashboard
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Real-time Stats
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Profile Card - Takes 2 columns, spanning 1 row */}
          <div className="md:col-span-2 rounded-xl border border-slate-700/50 bg-slate-800/20 p-6 md:p-8 backdrop-blur-sm group hover:border-slate-600/70 transition-colors">
            <div className="flex justify-between items-start">
              <div className="h-14 w-14 rounded-lg overflow-hidden border border-slate-600/50">
                <Image src={profile.avatar_url} alt={profile.name} width={56} height={56} className="h-full w-full object-cover" />
              </div>
              <a href={profile.html_url} target="_blank" className="p-2 rounded-lg bg-teal-500/20 text-teal-400 hover:bg-teal-500 hover:text-slate-950 transition-all text-sm">
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-bold text-white">{profile.name}</h3>
              <p className="text-slate-500 font-mono text-xs mt-1">@{profile.login}</p>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-sm">
                {profile.bio || "Fullstack Developer building products with Next.js & TypeScript."}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-slate-700/50 pt-6">
              <div className="text-center">
                <p className="text-lg font-bold text-teal-400">{profile.public_repos}</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">Repos</p>
              </div>
              <div className="text-center border-x border-slate-700/50">
                <p className="text-lg font-bold text-teal-400">{profile.followers}</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">Followers</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-teal-400">{profile.following}</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">Following</p>
              </div>
            </div>
          </div>

          {/* Repos Grid - Takes 2 columns, acts as a 2x2 grid for 4 repos */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {repos.slice(0, 4).map((repo: any) => (
              <a 
                key={repo.id} 
                href={repo.html_url} 
                target="_blank"
                className="rounded-xl border border-slate-700/50 bg-slate-800/20 p-5 backdrop-blur-sm group hover:bg-teal-500/10 hover:border-teal-500/50 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <BookMarked className="h-4 w-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
                  <ArrowUpRight className="h-4 w-4 text-slate-600 group-hover:text-teal-400 transition-colors" />
                </div>
                <h4 className="font-semibold text-white group-hover:text-teal-400 transition-colors truncate text-sm">{repo.name}</h4>
                <p className="mt-2 text-xs text-slate-500 group-hover:text-slate-400 line-clamp-2 transition-colors h-7">
                  {repo.description || "No description provided."}
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs text-slate-500 group-hover:text-teal-400 transition-colors">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3" />
                    {repo.stargazers_count}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-3 w-3" />
                    {repo.forks_count}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contributions - Takes full width */}
          <div className="md:col-span-4 rounded-xl border border-slate-700/50 bg-slate-800/20 p-6 md:p-8 backdrop-blur-sm group hover:border-slate-600/70 transition-colors">
            <div className="flex items-center gap-2 mb-6">
              <BookMarked className="h-4 w-4 text-teal-400 shrink-0" />
              <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest whitespace-nowrap">Contributions</h4>
            </div>
            {contributionData ? (
              <ContributionSkylineWrapper data={contributionData} />
            ) : (
              <p className="text-sm text-slate-500">Unable to load contribution chart</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
