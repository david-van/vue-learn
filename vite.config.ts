import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'icon',
          // this is optional, default enabling all the collections supported by Iconify
          // enabledCollections: ['ep'], // 这是element-plus在iconify的集合名,
          // 这行不配置也可以, 会识别iconify有的集合名 只要用了就自动下载 自动导入
          customCollections: ['my'], // **** 这里配置组件内需要使用的自定义集合名
        }),
      ],
      dts: 'src/components.d.ts',
    }),
    Icons({
      // experimental
      compiler: 'vue3',
      autoInstall: true,
      customCollections: {
        my: FileSystemIconLoader('src/assets/icons'), //配置自定义集合的路径, 更详细的配置可参考插件仓库
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
