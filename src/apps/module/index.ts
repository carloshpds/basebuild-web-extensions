import { UserConfig as ViteUserConfig } from 'vite'
import { defineConfig } from 'vite'
import bbWebExtensionsConfig from './vite.config.js'

export { bbWebExtensionsConfig }

export const bbWebExtensions = (viteConfig: ViteUserConfig = {}) => {
  return defineConfig({
    ...bbWebExtensionsConfig,
    ...viteConfig
  })
}