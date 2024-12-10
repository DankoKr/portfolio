import { ProjectCard } from '../components/projectCard';
import { projects } from '../constants/projects';

export default function ProjectsPage() {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </>
  );
}
