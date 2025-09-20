import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export const buildResolvers = ({paths}: BuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {
      app: paths.app,
      widgets: paths.widgets,
      features: paths.features,
      entities: paths.entities,
      shared: paths.shared,
    },
  }
}