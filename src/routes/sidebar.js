/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
 const routes = [
    {
      path: '/dashboarddefault', // the url
      icon: 'HomeIcon', // the component being exported from icons/index.js
      name: 'Dashboard', // name that appear in Sidebar
    },
    {
      path: '/layout/sending',
      icon: 'FormsIcon',
      name: 'Sending',
    },
    {
      path: '/layout/receiving',
      icon: 'CardsIcon',
      name: 'Receiving',
    },
    {
      path: '/layout/tracking',
      icon: 'ChartsIcon',
      name: 'Tracking',
    },
    {
      path: '/layout/settings',
      icon: 'ButtonsIcon',
      name: 'Settings',
    },
    {
      path: '/layout/billing',
      icon: 'ModalsIcon',
      name: 'Billing',
    },
    {
      path: '/layout/help',
      icon: 'TablesIcon',
      name: 'Help',
    },
   
  ]
  
  export default routes