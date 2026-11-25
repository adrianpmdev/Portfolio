/**
 * ConsoleProject
 *
 * Project without a user interface (API, internal service or data analysis)
 * shown in the Command Prompt as a README.
 *
 * @author adrianpmdev
 */

export interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  path: string;
}

export interface ConsoleProject {
  id: string;
  descriptionKey: string;
  featureKeys: string[];
  stack: string[];
  endpoints?: ApiEndpoint[];
  repoUrl: string;
}
