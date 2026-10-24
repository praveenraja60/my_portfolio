type AtmosphereProps = {
  tone?: "dark" | "light" | "wine";
};

export function Atmosphere({ tone = "dark" }: AtmosphereProps) {
  const orbs =
    tone === "light"
      ? [
          "left-[-8%] top-[-10%] h-72 w-72 bg-ember-300/40",
          "right-[-6%] bottom-[-12%] h-80 w-80 bg-black/10",
          "left-1/2 top-1/3 h-64 w-64 bg-ember-200/50",
        ]
      : tone === "wine"
        ? [
            "left-[-10%] top-[-8%] h-80 w-80 bg-ember-400/35",
            "right-[-8%] bottom-[-10%] h-96 w-96 bg-black/40",
            "left-[40%] top-[30%] h-72 w-72 bg-white/10",
          ]
        : [
            "left-[-8%] top-[-12%] h-80 w-80 bg-ember-700/50",
            "right-[-10%] bottom-[8%] h-96 w-96 bg-ember-900/80",
            "left-[42%] top-[28%] h-64 w-64 bg-white/10",
          ];

  return (
    <div className="atmosphere" aria-hidden="true">
      <span className={`orb ${orbs[0]}`} />
      <span className={`orb orb-b ${orbs[1]}`} />
      <span className={`orb orb-c ${orbs[2]}`} />
      <span className="sheen" />
      {tone !== "light" && <span className="grain" />}
    </div>
  );
}
