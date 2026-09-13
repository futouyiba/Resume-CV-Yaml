import sidebar from '!!yaml-loader!./sidebar.yaml';
import profile from '!!yaml-loader!./profile.yaml';
import experience from '!!yaml-loader!./experience.yaml';
import projects from '!!yaml-loader!./projects.yaml';

// Use the YAML loader explicitly so production builds do not fall through
// to webpack's generic file-loader and turn resume data into asset URLs.
export const data = {
  sidebar,
  profile,
  experience,
  projects,
};

export default data;
