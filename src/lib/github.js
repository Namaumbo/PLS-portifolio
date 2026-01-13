function getCache(key) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function setCache(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore cache failures (private mode, quota, etc.)
  }
}

async function fetchGitHubJson(url) {
  const res = await fetch(url, {
    headers: {
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `GitHub request failed (${res.status} ${res.statusText})${text ? `: ${text}` : ""}`
    );
  }

  return res.json();
}

export function isLikelyScriptRepo(repo) {
  const name = `${repo?.name || ""}`.toLowerCase();
  const desc = `${repo?.description || ""}`.toLowerCase();

  // “Script-ish” keywords; tweak anytime.
  const keywordRe = /(script|scripts|cli|tool|utils|utility|automation|bot|scraper|crawler)/i;
  const looksScripty = keywordRe.test(name) || keywordRe.test(desc);

  // Exclude most “big apps” by name heuristics (still adjustable).
  const appRe = /(web|website|frontend|backend|fullstack|dashboard|platform|app)/i;
  const looksAppy = appRe.test(name) || appRe.test(desc);

  return Boolean(looksScripty && !looksAppy);
}

export async function fetchUserRepos(username, { cacheMs = 1000 * 60 * 60 * 24 } = {}) {
  const cacheKey = `pls.githubRepos.${username}`;
  const cached = getCache(cacheKey);

  if (
    cached &&
    typeof cached === "object" &&
    typeof cached.fetchedAt === "number" &&
    Array.isArray(cached.data) &&
    Date.now() - cached.fetchedAt < cacheMs
  ) {
    return cached.data;
  }

  const url = `https://api.github.com/users/${encodeURIComponent(
    username
  )}/repos?per_page=100&sort=updated`;
  const data = await fetchGitHubJson(url);

  setCache(cacheKey, { fetchedAt: Date.now(), data });
  return data;
}

export async function fetchReposByName(username, repoNames) {
  const uniqueNames = [...new Set((repoNames || []).filter(Boolean))];
  const results = await Promise.all(
    uniqueNames.map(async (name) => {
      const url = `https://api.github.com/repos/${encodeURIComponent(
        username
      )}/${encodeURIComponent(name)}`;
      return fetchGitHubJson(url);
    })
  );

  // Keep the order the user provided (unique).
  return uniqueNames.map((n) => results.find((r) => r?.name === n)).filter(Boolean);
}



