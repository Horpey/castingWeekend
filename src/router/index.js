import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/pages/home';
import About from '@/components/pages/about';
import pricing from '@/components/pages/pricing';
import blog from '@/components/pages/blog';
import Howit from '@/components/pages/Howit';
import Forgotpassword from '@/components/user/Forgotpassword';
import Login from '@/components/user/Login';
import register from '@/components/user/register';
import Registeractor from '@/components/user/Registeractor';
import Registerdirector from '@/components/user/Registerdirector';
import Contact from '@/components/pages/contact';
import notFound from '@/components/template/notFound';
import blogdetails from '@/components/pages/blogdetails';

import dashboard from '@/components/dashboard/index';
import auditions from '@/components/dashboard/pages/auditions';

import home from '@/components/dashboard/pages/home';
import audio from '@/components/dashboard/pages/audio';
import photo from '@/components/dashboard/pages/photo';
import addMedia from '@/components/dashboard/pages/addMedia';

import profile from '@/components/dashboard/user/profile';
import editprofile from '@/components/dashboard/user/editprofile';

import video from '@/components/dashboard/pages/video';

// Director Dashboard

import dirDashboard from '@/components/dashboard/director/index';
import dirHome from '@/components/dashboard/director/pages/dirHome';
import addProject from '@/components/dashboard/director/pages/addProject';
import manageAdmin from '@/components/dashboard/director/pages/manageAdmin';

import details from '@/components/dashboard/director/pages/details';
import addRole from '@/components/dashboard/director/pages/addRole';
import editRole from '@/components/dashboard/director/pages/editRole';


import dirProjects from '@/components/dashboard/director/pages/dirProjects';
import dirProfile from '@/components/dashboard/director/user/dirProfile';
import editProfile from '@/components/dashboard/director/user/editProfile';
import applicants from '@/components/dashboard/director/pages/applicants';


import dirSchedule from '@/components/dashboard/director/pages/dirSchedule';


// Authentication
import { requireAuth } from '../utils/auth';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/howit',
      name: 'Howit',
      component: Howit,
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: pricing,
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/Forgotpassword',
      name: 'Forgotpassword',
      component: Forgotpassword,
    },
    {
      path: '/Registeractor',
      name: 'Registeractor',
      component: Registeractor,
    },
    {
      path: '/Registerdirector',
      name: 'Registerdirector',
      component: Registerdirector,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/blogdetails',
      name: 'blogdetails',
      component: blogdetails,
    },
    {
      path: '/404',
      component: notFound,
    },
    {
      path: '*',
      redirect: '/404',
    },

    // Dashboard Routing
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      // beforeEnter: requireAuth,
      children: [
        {
          path: 'home',
          name: 'home',
          component: home,
        },
        {
          path: 'auditions',
          name: 'auditions',
          component: auditions,
        },
        {
          path: 'audio',
          name: 'audio',
          component: audio,
        },
        {
          path: 'photo',
          name: 'photo',
          component: photo,
        },
        {
          path: 'profile',
          name: 'profile',
          component: profile,
        },
        {
          path: 'editprofile',
          name: 'editprofile',
          component: editprofile,
        },
        {
          path: 'video',
          name: 'video',
          component: video,
        },
        {
          path: 'addMedia',
          name: 'addMedia',
          component: addMedia,
        },
      ],
    },

    // Director Dashboard
    {
      path: '/director',
      name: 'dirDashboard',
      component: dirDashboard,
      children: [
        {
          path: 'home',
          name: 'dirHome',
          component: dirHome,
        },
        {
          path: 'projects',
          name: 'dirProjects',
          component: dirProjects,
        },
        {
          path: 'profile',
          name: 'dirProfile',
          component: dirProfile,
        },
        {
          path: 'editProfile',
          name: 'editProfile',
          component: editProfile,
        },
        {
          path: 'schedule',
          name: 'dirSchedule',
          component: dirSchedule,
        },
        {
          path: 'addProject',
          name: 'addProject',
          component: addProject,
        },
        {
          path: 'subAdmin',
          name: 'manageAdmin',
          component: manageAdmin,
        },
      ],
    },
    {
      path: '/project',
      name: 'dirDashboard',
      component: dirDashboard,
      children: [
        {
          path: 'details/:id',
          name: 'details',
          component: details,
        },
        {
          path: 'addRole',
          name: 'addRole',
          component: addRole,
        },
        {
          path: 'editRole/:id',
          name: 'editRole',
          component: editRole,
        },
        {
          path: 'applicants/:id',
          name: 'applicants',
          component: applicants,
        }
      ],
    },
  ],
});



// router.beforeEach((to, from, next) => {
//   // redirect to login page if not logged in and trying to access a restricted page
//   const publicPages = ['/login'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   if (authRequired && !loggedIn) {
//     return next('/login');
//   }

//   next();
// })