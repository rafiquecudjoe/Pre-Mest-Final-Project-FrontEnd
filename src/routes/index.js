import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Express404 = lazy(() => import("../pages/404/Express404"));
const Sending = lazy(() => import("../pages/Dashboard/sending/Sending"));
const Neworder = lazy(() => import("../pages/Neworder/Neworder"));
const Tracking = lazy(() => import("../pages/Dashboard/Tracking/Tracking"));
const Receiving = lazy(() => import("../pages/Dashboard/Receiving/Receiving"));
const Help = lazy(() => import("../pages/Dashboard/Help/Help"));
const Payment = lazy(() => import("../pages/payment/Payment"));
const Checkout = lazy(() => import("../pages/checkout/CheckoutMM"));
const Dashboarddefault = lazy(()=> import('../pages/Dashboard/Dashboarddefault'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  //   {
  //     path: '/dashboarddefault', // the url
  //     component: Dashboard, // view rendered
  //   },
  {
    path: "/sending",
    component: Sending,
  },
  {
    path: "/receiving",
    component: Receiving,
  },
  {
    path: "/tracking",
    component: Tracking,
  },
  //   {
  //     path: '/settings',
  //     component: Settings,
  //   },
  //   {
  //     path: '/billing',
  //     component: Billing,
  //   },
  {
    path: "/help",
    component: Help,
  },
  {
    path: "/404",
    component: Express404,
  },

  {
    path: "/neworder",
    component: Neworder,
  },
  {
    path: "/payment",
    component: Payment,
  },
  {
    path: "/checkout",
    component: Checkout,
  },
  {
    path: '/dashdefault',
    component: Dashboarddefault
  }
];

export default routes;
