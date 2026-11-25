/**
 * CommandPrompt
 *
 * Read-only console app that lists the projects without a user interface
 * (APIs, internal services and data analysis) and prints the README of the
 * selected one.
 *
 * @author adrianpmdev
 */

import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { CONSOLE_PROJECTS } from './console-projects-data';

@Component({
  selector: 'app-command-prompt',
  imports: [TranslatePipe],
  templateUrl: './command-prompt.html',
  styleUrl: './command-prompt.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommandPrompt {
  protected readonly projects = CONSOLE_PROJECTS;

  protected readonly selectedProjectId = signal(this.projects[0].id);

  protected readonly selectedProject = computed(
    () =>
      this.projects.find((project) => project.id === this.selectedProjectId()) ?? this.projects[0],
  );

  protected selectProject(projectId: string): void {
    this.selectedProjectId.set(projectId);
  }
}
