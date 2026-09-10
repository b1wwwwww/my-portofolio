import { NextResponse } from "next/server";
import { getGithubProfile, getGithubRepos } from "@/lib/github";

export const revalidate = 3600;

export async function GET() {
  const [profile, repos] = await Promise.all([getGithubProfile(), getGithubRepos()]);
  return NextResponse.json({ profile, repos }, {
    headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" }
  });
}
