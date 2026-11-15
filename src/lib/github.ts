import { GithubRepo } from "@/types/portfolio";

export async function getTopGithubRepos(): Promise<GithubRepo[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/TmpstLord/repos?sort=pushed&direction=desc&per_page=10",
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        next: { revalidate: 60 },
      },
    );

    if (!res.ok) {
      throw new Error("Gagal mengambil data dari GitHub");
    }

    const repos: (GithubRepo & { fork?: boolean })[] = await res.json();

    return repos.filter((repo) => !repo.fork).slice(0, 6);
  } catch (error) {
    console.error("GitHub API Error:", error);
    return [];
  }
}
