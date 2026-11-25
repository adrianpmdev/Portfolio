/**
 * COMMAND_PROMPT_APP
 *
 * Registry entry for the Command Prompt app.
 *
 * @author adrianpmdev
 */

import { AppDefinition } from '../app-definition';

export const COMMAND_PROMPT_APP: AppDefinition = {
  id: 'command-prompt',
  titleKey: 'commandPrompt.title',
  iconSrc: '/assets/images/system/apps/command_prompt.webp',
  loadComponent: () => import('./command-prompt').then((m) => m.CommandPrompt),
};
