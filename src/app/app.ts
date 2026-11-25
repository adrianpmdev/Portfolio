/**
 * App
 *
 * Root component. Hosts the router outlet; page cross-fades are handled by the
 * router through the View Transitions API.
 *
 * @author adrianpmdev
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
