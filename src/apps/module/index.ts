import { UserConfig as ViteUserConfig } from 'vite'
import { defineConfig } from 'vite'
import bbWebExtensionsConfig from './vite.config'

export { bbWebExtensionsConfig }

export const bbWebExtensions = (viteConfig: ViteUserConfig = {}) => {
  return defineConfig({
    ...bbWebExtensionsConfig,
    ...viteConfig
  })
}