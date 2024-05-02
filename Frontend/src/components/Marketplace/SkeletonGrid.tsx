import { SkeletonCard } from "../common/SkeletonCard";

export function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 sm:grid-rows-3  gap-12  place-items-center">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className={`row-span-1 h-[400px] mb-10 rounded-xl border-2 bg-background border-slate-400/10  p-4 dark:bg-neutral-900 `}
        >
          <SkeletonCard />
        </div>
      ))}
      ;
    </div>
  );
}
