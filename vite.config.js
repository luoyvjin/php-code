import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            // 教程用 Laravel Mix 的 .sass('resources/sass/app.scss', 'public/css')，
            // Vite 里等价写法就是把这个入口写进 input。
            input: ['resources/sass/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    server: {
        // 容器内必须监听 0.0.0.0，否则宿主机通过 5173 端口映射访问不到 dev server
        host: '0.0.0.0',
        hmr: {
            host: 'localhost',
        },
        watch: {
            usePolling: true,
            interval: 300,
        },
    },
});
