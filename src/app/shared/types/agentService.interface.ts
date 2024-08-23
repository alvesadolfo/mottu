import { Agent } from './agent.interface';

export interface AgentServiceType {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Agent[];
}
