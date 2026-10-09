export async function getGithubContributions(username: string) {
  const query = `
    query($userName:String!) {
      user(login: $userName) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables: { userName: username },
      }),
    });

    if (!response.ok) {
      console.error("GitHub GraphQL error:", response.status);
      return null;
    }

    const data = await response.json();

    if (data.errors) {
      console.error("GraphQL errors:", data.errors);
      return null;
    }

    return data.data?.user?.contributionsCollection?.contributionCalendar || null;
  } catch (error) {
    console.error("Fetch contributions error:", error);
    return null;
  }
}

export function transformContributionData(calendar: any) {
  if (!calendar || !calendar.weeks) return [];
  
  const weeks = calendar.weeks || [];
  const contributions = [];
  
  for (const week of weeks) {
    for (const day of week.contributionDays || []) {
      contributions.push({
        date: day.date,
        count: day.contributionCount
      });
    }
  }
  
  return contributions;
}

export function renderContributionSVG(calendar: any) {
  if (!calendar) return null;

  const weeks = calendar.weeks || [];
  
  // Ambil 53 minggu (setahun penuh) agar memenuhi kotak
  const lastWeeks = weeks.slice(-53);
  const cols = lastWeeks.length;
  const rows = 7;

  // Sesuaikan cellSize agar total lebar ~340px (fit dalam p-8 card)
  const cellSize = 5; 
  const cellGap = 1.5;

  const width = cols * (cellSize + cellGap);
  const height = rows * (cellSize + cellGap);

  let svg = `<svg width="100%" height="auto" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet">`;

  const colorMap = {
    0: "#1e293b",
    1: "#064e3b",
    2: "#047857",
    3: "#10b981",
    4: "#6ee7b7",
  };

  let x = 0;
  lastWeeks.forEach((week: any) => {
    let y = 0;
    week.contributionDays?.forEach((day: any) => {
      const count = day.contributionCount;
      const level = count === 0 ? 0 : count < 5 ? 1 : count < 10 ? 2 : count < 20 ? 3 : 4;
      const color = colorMap[level as keyof typeof colorMap];

      svg += `<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" fill="${color}" rx="1" />`;
      y += cellSize + cellGap;
    });
    x += cellSize + cellGap;
  });

  svg += `</svg>`;
  return svg;
}
