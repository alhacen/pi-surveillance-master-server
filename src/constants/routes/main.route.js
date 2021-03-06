import {lazy} from 'react';
const HOME_PATH = '/';
const VIDEOS_PATH = '/videos';
const ADD_DEVICE_PATH = '/dashboard/add-device'
export const ROUTES = [
  {
    path: HOME_PATH,
    title: 'Welcome',
    screen: lazy(() => import('../../screens/home.screen.js')),
  },
  {
    path: VIDEOS_PATH,
    title: 'Videos',
    screen: lazy(() => import('../../screens/videos.screen.js')),
  },
  {
    path: ADD_DEVICE_PATH,
    title: 'Add device',
    screen: lazy(() => import('../../screens/addDevice.screen.js')),
  },
];
