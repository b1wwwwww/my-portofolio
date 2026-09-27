import { NextResponse } from "next/server";
import { getGithubProfile, getGithubRepos } from "@/lib/github";
import { getGithubContributions } from "@/lib/contributions";

export const revalidate = 3600;

export async function GET() {
  const [profile, repos, contributions] = await Promise.all([
    getGithubProfile(),
    getGithubRepos(),
    getGithubContributions("b1wwwwww")
  ]);
  return NextResponse.json({ profile, repos, contributions }, {
    headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" }
  });
}
