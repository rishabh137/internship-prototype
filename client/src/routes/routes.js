import { lazy } from "react"

const Main = lazy(() => import('../pages/Main'))
const Internship = lazy(() => import('../components/Internship'))
const Blog = lazy(() => import('../components/Blog'))
const Feedback = lazy(() => import("../components/Feedback"))

const routes = {
    main: {
        path: '/',
        element: Main
    },
    internship: {
        path: '/internship',
        element: Internship
    },
    blog: {
        path: '/blog',
        element: Blog
    },
    feedback: {
        path: '/feedback',
        element: Feedback
    },
    invalid: {
        path: '*',
        element: Main
    },
}

// export const routes
export { routes }