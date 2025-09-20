export type BuildMode = "development" | "production"

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  shared: string;
  entities: string;
  app: string;
  features: string;
  widgets: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}