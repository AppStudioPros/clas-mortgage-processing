'use client';

/**
 * Soft cloud / smoke drift behind the hero.
 * Three overlapping blob layers, each animating slowly across the X-axis
 * at different speeds — creates a constant gentle motion without being distracting.
 * Animation keyframes live in globals.css (.cloud-1, .cloud-2, .cloud-3)
 */
export default function CloudBackdrop() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-cream-50" />

      <div className="cloud-layer cloud-1">
        <div className="absolute top-[8%] left-[-10%] h-[500px] w-[700px] rounded-full bg-lavender-300/35 blur-[120px]" />
        <div className="absolute top-[60%] left-[40%] h-[420px] w-[600px] rounded-full bg-lavender-200/45 blur-[100px]" />
      </div>

      <div className="cloud-layer cloud-2">
        <div className="absolute top-[20%] right-[-5%] h-[420px] w-[560px] rounded-full bg-lavender-400/25 blur-[110px]" />
        <div className="absolute top-[75%] left-[10%] h-[320px] w-[480px] rounded-full bg-lavender-300/30 blur-[90px]" />
      </div>

      <div className="cloud-layer cloud-3">
        <div className="absolute top-[40%] left-[20%] h-[260px] w-[360px] rounded-full bg-lavender-200/40 blur-[80px]" />
        <div className="absolute top-[15%] right-[25%] h-[200px] w-[300px] rounded-full bg-cream-300/35 blur-[80px]" />
      </div>
    </div>
  );
}
