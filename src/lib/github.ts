import { GithubRepo } from "@/types/portfolio";

export async function getTopGithubRepos(): Promise<GithubRepo[]> {
  try {
    // Mengambil 6 repo publik terakhir yang di-update dari akun GitHub kamu
    const res = await fetch(
      "https://api.github.com/users/TmpstLord/repos?sort=updated&per_page=6",
      {
        next: { revalidate: 3600 }, // Data akan di-cache dan otomatis diperbarui setiap 1 jam
      },
    );

    if (!res.ok) {
      throw new Error("Gagal mengambil data dari GitHub");
    }

    const repos: GithubRepo[] = await res.json();

    // Filter repo yang bukan hasil "fork" (salinan dari orang lain)
    return repos.filter((repo) => !(repo as any).fork);
  } catch (error) {
    console.error("GitHub API Error:", error);
    return []; // Kembalikan array kosong jika terjadi error agar web tidak crash
  }
}
