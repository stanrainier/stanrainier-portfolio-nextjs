import { Divider } from "@heroui/react";

import ProjectsDisplay from "@/components/projects_bento";
import ProjectListByCategory from "@/components/projects_grid";

export const metadata = {
  title: "Projects",
};
export default function ProjectPage() {
  return (
    <div>
      <div className="w-full mb-12">
        <ProjectsDisplay />
      </div>
      <Divider className="mb-12" />
      <div className="w-full mb-48">
        <ProjectListByCategory />
      </div>
    </div>
  );
}
