/**
 * CONSOLE_PROJECTS
 *
 * Projects without a user interface listed in the Command Prompt. To add one,
 * append an entry here and its commandPrompt.projects.<id> i18n keys.
 *
 * @author adrianpmdev
 */

import { ConsoleProject } from './console-project';

export const CONSOLE_PROJECTS: readonly ConsoleProject[] = [
  {
    id: 'link-checker',
    descriptionKey: 'commandPrompt.projects.linkChecker.description',
    featureKeys: [
      'commandPrompt.projects.linkChecker.features.scheduled',
      'commandPrompt.projects.linkChecker.features.history',
      'commandPrompt.projects.linkChecker.features.onDemand',
    ],
    stack: ['Python', 'FastAPI', 'Requests', 'SQLite'],
    endpoints: [
      { method: 'GET', path: '/products' },
      { method: 'POST', path: '/products' },
      { method: 'GET', path: '/products/broken' },
      { method: 'POST', path: '/checks/run' },
    ],
    repoUrl: 'https://github.com/adrianpmdev/link-checker',
  },
  {
    id: 'click-reports',
    descriptionKey: 'commandPrompt.projects.clickReports.description',
    featureKeys: [
      'commandPrompt.projects.clickReports.features.register',
      'commandPrompt.projects.clickReports.features.stats',
      'commandPrompt.projects.clickReports.features.csv',
    ],
    stack: ['Python', 'FastAPI', 'Pandas', 'SQLite'],
    endpoints: [
      { method: 'POST', path: '/clicks' },
      { method: 'GET', path: '/stats/products' },
      { method: 'GET', path: '/stats/daily' },
      { method: 'GET', path: '/reports/clicks.csv' },
    ],
    repoUrl: 'https://github.com/adrianpmdev/click-reports',
  },
  {
    id: 'steam-games',
    descriptionKey: 'commandPrompt.projects.steamGames.description',
    featureKeys: [
      'commandPrompt.projects.steamGames.features.dataset',
      'commandPrompt.projects.steamGames.features.questions',
      'commandPrompt.projects.steamGames.features.preparation',
    ],
    stack: ['Python', 'Pandas', 'DuckDB', 'Matplotlib', 'Jupyter'],
    repoUrl: 'https://github.com/adrianpmdev/BigData-SteamGames',
  },
];
