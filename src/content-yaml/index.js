// Production webpack in this legacy project does not register yaml-loader,
// so force the loader for these four resume data files.
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import sidebar from '!!yaml-loader!./sidebar.yaml';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import profile from '!!yaml-loader!./profile.yaml';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import experience from '!!yaml-loader!./experience.yaml';
// eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
import projects from '!!yaml-loader!./projects.yaml';

export const data = {
  sidebar,
  profile,
  experience,
  projects,
};

export default data;
