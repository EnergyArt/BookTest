
import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/inertia-react';

createInertiaApp({
    resolve: (name) => import(`./Pages/${name}`).then((module) => module.default),
    setup({ el, App, props }) {
        const root = createRoot(el)
        root.render(
            <App {...props} />
        )
    },
    title: (title) => (title ? title : 'BookTest'),
})
