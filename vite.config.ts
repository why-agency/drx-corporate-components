import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite"
import {defineConfig} from 'vite'

import * as path from 'path'

module.exports = defineConfig(({mode}) => {
    if (mode === 'preview') {
        return {
            plugins: [
                vue(),
                VueI18nPlugin({
                    include: [path.resolve(__dirname, './src/locales/**')],
                    strictMessage: false
                })
            ]
        }
    }

    return {
        plugins: [
            vue(),
            VueI18nPlugin({
                include: [path.resolve(__dirname, './src/locales/**')],
                strictMessage: false
            })
        ],
        build: {
            lib: {
                entry: path.resolve(__dirname, 'lib/main.ts'),
                name: 'VueDrx',
                fileName: format => `drx-corporate-components.${format}.js`
            }
        }
    }
})
