import { lazy, LazyExoticComponent } from "react";


type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: JSXComponent | LazyExoticComponent<JSXComponent>,
    name: string,
    id: number
}



const LazyOne = lazy(() => import( /*webpackChunkName: LazyChunk-1*/ '../01-Lazyload/Pages/LazypageOne'));
const LazyTwo = lazy(() => import( /*webpackChunkName:  LazyChunk-2*/  '../01-Lazyload/Pages/LazypageTwo'));
const LazyThree = lazy(() => import( /*webpackChunkName: LazyChunk-3*/  '../01-Lazyload/Pages/LazypageThree'));
/*De esta manera podemos renonbrar el chunk */


export const routes: Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: LazyOne,
        name: 'Lazyload 1',
        id: 1
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: LazyTwo,
        name: 'Lazyload 2',
        id: 2
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: LazyThree,
        name: 'Lazyload 3',
        id: 3
    }
]