const skills = [
  { name: "JavaScript", icon: "⚡" },
  { name: "TypeScript", icon: "🔵" },
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "📡" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Shadcn UI", icon: "✨" },
  { name: "DaisyUI", icon: "🌸" },
  { name: "Node.js", icon: "🟢" },
  { name: "Sanity CMS", icon: "🧩" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-100">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-blue-600 animate-[fadeIn_1s_ease-in-out]">
        My Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group flex flex-col items-center p-4 bg-white border rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-3xl mb-2 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {skill.icon}
            </span>
            <p className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
