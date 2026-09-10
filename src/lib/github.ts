export async function getGithubProfile() {
  try {
    const headers: HeadersInit = {};
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch("https://api.github.com/users/b1wwwwww", {
      headers,
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Failed to fetch github profile");
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getGithubRepos() {
  try {
    const headers: HeadersInit = {};
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const res = await fetch("https://api.github.com/users/b1wwwwww/repos?sort=updated&per_page=6", {
      headers,
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Failed to fetch github repos");
    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
