import { lazy, LazyExoticComponent } from "react";
import FormikAbstract from "../03-Forms/Pages/FormikAbstract";
import FormikBasicPage from "../03-Forms/Pages/FormikBasicPage";
import FormikComponent from "../03-Forms/Pages/FormikComponent";
import FormikYupPage from "../03-Forms/Pages/FormikYupPage";
import RegisterPage from "../03-Forms/Pages/RegisterPage";


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
        to: '/formik',
        path: 'formik',
        Component: FormikBasicPage,
        name: 'form',
        id: 1
    },
    {
        to: '/formik-yup',
        path: 'formik-yup',
        Component: FormikYupPage,
        name: 'form-yup',
        id: 2
    },
    {
        to: '/formik-yup-component',
        path: 'formik-yup-component',
        Component: FormikComponent,
        name: 'form-yup-component',
        id: 3
    },
    {
        to: '/formik-yup-abstract',
        path: 'formik-yup-abstract',
        Component: FormikAbstract,
        name: 'formik-yup-abstract',
        id: 4
    }
]