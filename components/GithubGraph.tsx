"use client";

import { useState, useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";

function YearButton({ year, currentYear, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-1.5 py-2 border text-sm font-medium transition ${
        year === currentYear
          ? "bg-emerald-700 text-white border-emerald-600"
          : "bg-transparent text-white border-emerald-600 hover:bg-emerald-800"
      }`}
    >
      {year}
    </button>
  );
}

function getGitHubYears(joinYear: number) {
  const currentYear = new Date().getFullYear();
  return Array.from(
    { length: currentYear - joinYear + 1 },
    (_, i) => currentYear - i
  );
}

export default function GithubGraph() {
  const [calendarYear, setCalendarYear] = useState<number | undefined>();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const username = "lav-kushwaha";
  const today = new Date().getFullYear();
  const years = getGitHubYears(2022);

  return (
    <section className="w-full text-white md:mb-20 md:mt-20">
      <div className="max-w-6xl mx-auto px-7">

        <h1 className="text-2xl md:text-5xl font-bold mb-8 md:mb-10">
          Contribution Graph
        </h1>

        <div className="flex flex-col md:flex-row gap-6 items-start">

          <div className="w-full border border-gray-700 rounded-xl p-6">
            <GitHubCalendar
              username={username}
              year={calendarYear}
              blockSize={isMobile ? 8 : 15}
              blockMargin={isMobile ? 2 : 3}
              fontSize={13}
              colorScheme="dark"
              theme={{
                dark: [
                  "#161b22",
                  "#0e4429",
                  "#006d32",
                  "#26a641",
                  "#39d353",
                ],
              }}
            />
          </div>

          <div className="flex md:flex-col gap-2">
            {years.slice(0, 5).map((year) => (
              <YearButton
                key={year}
                year={year}
                currentYear={calendarYear ?? today}
                onClick={() =>
                  setCalendarYear(year === calendarYear ? undefined : year)
                }
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}