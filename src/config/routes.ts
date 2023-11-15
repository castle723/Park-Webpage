import Home from '../pages/Home'
import Gallery from '../pages/Gallery'

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
    },
    {
        path: "/Gallery",
        component: Gallery,
        name: "Gallery",
      },
];

export default routes