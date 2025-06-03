export const getNavLinkClass = (currentPath: string, path: string): string =>
  `transition font-medium ${
    currentPath === path
      ? "text-indigo-600 dark:text-indigo-400 font-semibold"
      : "text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-300"
  }`;
