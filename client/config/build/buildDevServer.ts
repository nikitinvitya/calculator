import {BuildMode, BuildOptions} from "./types/config";
import type {Configuration as DevServerConfigurations} from 'webpack-dev-server';

export const buildDevServer = ({port}: BuildOptions):DevServerConfigurations => {
  return {
    port,
    open: true,
  }
}