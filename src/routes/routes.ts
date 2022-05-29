import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-Lazyload/Pages/NoLazy";



type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: JSXComponent | LazyExoticComponent<JSXComponent>,
    name: string,
    id: number
}



const LazyLayout = lazy(() => import( /*ChunkName: LazyChunk-1*/ '../01-Lazyload/Layout/LazyLayout'));

/*De esta manera podemos renonbrar el chunk */


export const routes: Route[] = [
      /*Este componente lo cargamos con lazyload*/
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout-Dash',
        id: 1
    },
    /*Este componente lo cargamos de manera tradicional*/
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'NO Lazy',
        id: 2
    },
 
]