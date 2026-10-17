const skills = [
  "React.js",
  "Node.js",
  "TypeScript",
  "React Native",
  "Product Leadership",
  "API Integrations",
  "Release Management",
  "Team Leadership",
  "Git",
  "Client Communication",
  "HRMS",
  "Full-stack Delivery",
];

export function SkillsMarquee() {
  const loop = [...skills, ...skills];

  return (
    <section
      aria-label="Core skills"
      className="overflow-hidden border-y border-charcoal/8 bg-white py-5"
    >
      <div className="marquee-track flex w-max items-center gap-8">
        {loop.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="flex items-center gap-8 font-sans text-sm font-semibold tracking-wide text-charcoal-mute"
          >
            {skill}
            <span
              className="h-1.5 w-1.5 rounded-full bg-ember-600"
              aria-hidden="true"
            />
          </span>
        ))}
      </div>
    </section>
  );
}
