interface BranchDividerProps {
  className?: string;
  flip?: boolean;
}

/**
 * Signature decorative motif: a single hand-drawn gold vine that
 * threads between sections, echoing the kitchen-garden thread that
 * runs through the brand without literally illustrating it.
 */
export default function BranchDivider({ className = '', flip = false }: BranchDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden ${flip ? 'rotate-180' : ''} ${className}`}
    >
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className="h-10 w-full text-gold/70 md:h-14"
      >
        <path
          d="M0 30 C 150 5, 300 55, 450 30 S 750 5, 900 30 S 1100 55, 1200 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="branch-path"
        />
        {[120, 330, 540, 760, 980].map((x, i) => (
          <circle key={x} cx={x} cy={i % 2 === 0 ? 22 : 38} r="2.5" fill="currentColor" />
        ))}
      </svg>
    </div>
  );
}
