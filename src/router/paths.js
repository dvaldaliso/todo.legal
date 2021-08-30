/* jshint -W024 */
export default [
     {
      path: '/',
      meta: {
        public: true
      },
      name: 'Root',
      redirect: {
        name: 'Login'
      }
    },
        {
      path: '/login',
      meta: {
        public: true,
        title: 'Acceder'
      },
      name: 'Login',
      component: () => import(/* webpackChunkName: "routes" */ '../components/Login')
    },
    {
      path: '/exito',
      meta: {
        public: false,
        breadcrumb: true,
        title: 'Registrar'
      },
      name: 'Exito',
      component: () => import(/* webpackChunkName: "registro" */ '../components/Exito'),
      props:true,
    },
    {
      path: '/registrar',
      meta: {
        public: false,
        breadcrumb: true,
        title: 'Registrar'
      },
      name: 'Registrar',
      component: () => import(/* webpackChunkName: "registro" */ '../components/Registro')
    },
   
  ]
  