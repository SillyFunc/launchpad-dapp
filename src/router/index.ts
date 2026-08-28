import { createBrowserRouter, redirect } from 'react-router'
import RootLayout from '../layouts/root-layout'
import BoardPage from '../pages/board'
import LaunchPage from '../pages/launch'
import PrelaunchPage from '../pages/prelaunch'
import MePage from '../pages/me'

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        loader: () => redirect('/board'),
      },
      {
        path: 'board',
        Component: BoardPage,
      },
      {
        path: 'launch',
        Component: LaunchPage,
      },
      {
        path: 'prelaunch',
        Component: PrelaunchPage,
      },
      {
        path: 'me',
        Component: MePage,
      },
    ],
  },
])

export default router