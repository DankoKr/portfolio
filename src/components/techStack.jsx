import {
  SiJavascript,
  SiTypescript,
  SiVuedotjs,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
  SiFirebase,
} from "react-icons/si"

export function TechStack() {
  const technologies = [
    { icon: SiJavascript, label: "JS" },
    { icon: SiTypescript, label: "TS" },
    { icon: SiVuedotjs, label: "V" },
    { icon: SiReact, label: "React" },
    { icon: SiTailwindcss, label: "TW" },
    { icon: SiNextdotjs, label: "Next" },
    { icon: SiGraphql, label: "GQL" },
    { icon: SiFirebase, label: "FB" },
  ]

  return (
    <div className="rounded-xl bg-gray-900/60 backdrop-blur-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Technologies I have worked with</h2>
      <div className="grid grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
          >
            <tech.icon className="w-6 h-6" />
          </div>
        ))}
      </div>
    </div>
  )
}

