import { cn } from "@/lib/utils";

export function DeveloperIllustration({ className, title = "Developer illustration" }) {
  return (
    <svg
      viewBox="0 0 720 520"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={cn("w-full h-auto", className)}
    >
      {/* Background blob */}
      <g className="text-secondary">
        <path
          d="M96 280c0-124 100-224 224-224h120c124 0 224 100 224 224v16c0 124-100 224-224 224H320C196 520 96 420 96 296v-16Z"
          fill="currentColor"
          opacity="0.16"
        />
      </g>

      {/* Floating chips */}
      <g className="text-foreground" opacity="0.55">
        <rect x="136" y="120" width="44" height="26" rx="8" fill="currentColor" className="pls-anim-float" />
        <rect x="556" y="140" width="54" height="30" rx="10" fill="currentColor" className="pls-anim-float-slow" />
        <circle cx="585" cy="330" r="10" fill="currentColor" className="pls-anim-drift" />
      </g>

      {/* Monitor + code window */}
      <g className="text-foreground">
        <rect x="168" y="148" width="384" height="248" rx="22" fill="currentColor" opacity="0.08" />
        <rect x="186" y="166" width="348" height="186" rx="16" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.85" />

        {/* Window top bar */}
        <path d="M186 200h348" stroke="currentColor" strokeWidth="4" opacity="0.35" />
        <g opacity="0.5">
          <circle cx="208" cy="184" r="6" fill="currentColor" />
          <circle cx="230" cy="184" r="6" fill="currentColor" />
          <circle cx="252" cy="184" r="6" fill="currentColor" />
        </g>

        {/* Code lines */}
        <g opacity="0.55">
          <path d="M214 232h160" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M214 258h220" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M214 284h140" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M214 310h200" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </g>

        {/* Accent highlight in secondary */}
        <g className="text-secondary" opacity="0.55">
          <path d="M410 232h96" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <path d="M370 284h136" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </g>

        {/* Stand */}
        <path d="M322 396h76" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.55" />
        <path
          d="M280 416h160c10 0 18 8 18 18v10H262v-10c0-10 8-18 18-18Z"
          fill="currentColor"
          opacity="0.12"
        />
      </g>

      {/* Person with headphones */}
      <g className="text-foreground">
        {/* Head */}
        <circle cx="360" cy="372" r="44" fill="currentColor" opacity="0.10" />
        <circle cx="360" cy="372" r="44" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.9" />

        {/* Headphones */}
        <path
          d="M324 372c0-22 16-40 36-40s36 18 36 40"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.8"
        />
        <rect x="312" y="368" width="18" height="34" rx="8" fill="currentColor" opacity="0.22" />
        <rect x="390" y="368" width="18" height="34" rx="8" fill="currentColor" opacity="0.22" />

        {/* Hoodie */}
        <path
          d="M276 520v-36c0-58 38-100 84-100s84 42 84 100v36"
          fill="currentColor"
          opacity="0.08"
        />
        <path
          d="M276 520v-36c0-58 38-100 84-100s84 42 84 100v36"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          opacity="0.85"
        />
        <path d="M332 438c10 14 46 14 56 0" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.65" />
      </g>

      {/* Plant */}
      <g className="text-secondary" opacity="0.28">
        <path
          d="M130 440c22-30 44-34 66-12-8-30-2-52 26-66 6 28 20 44 44 52-22 10-38 24-46 50-20-16-40-20-66-24Z"
          fill="currentColor"
          className="pls-anim-drift"
        />
      </g>
      <g className="text-foreground" opacity="0.25">
        <rect x="112" y="448" width="62" height="44" rx="10" fill="currentColor" />
      </g>
    </svg>
  );
}


