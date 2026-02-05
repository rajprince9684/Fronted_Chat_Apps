// import React, { lazy, Suspense } from 'react'
// import { MemoryRouter, Route, Routes } from 'react-router-dom'
// import ProtectRoute from './Component/auth/ProtectRoute';
// import { LayoutLoder } from './Component/layout/Loaders';

// const Home = lazy(() => import("./Pages/Home"));
// const Login = lazy(() => import("./Pages/Login"))
// const Chat = lazy(() => import("./Pages/Chat"))
// const Groups = lazy(() => import('./Pages/Groups'))
// const NotFound = lazy(() => import('./Pages/NotFound'))
// let user = true;
// const App = () => {
//   return (
//     <MemoryRouter>
//       <Suspense fallback={<LayoutLoder />}>

//       <Routes>

//         <Route
//           element={<ProtectRoute user={user} />}>
//           <Route path='/' element={<Home />} />
//           <Route path='/chat/:chatId' element={<Chat />} />
//           <Route path='/groups' element={<Groups />} />
//         </Route>

//         <Route path='/login' element={
//           <ProtectRoute user={!user} redirect='/'>
//             <Login />
//           </ProtectRoute>
//         }
//         />

//         <Route path='*' element={<NotFound />} />

//       </Routes>

//       </Suspense>
//     </MemoryRouter>

//   );
// }

// export default App

import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Changed from MemoryRouter
import ProtectRoute from './Component/auth/ProtectRoute';
import { LayoutLoder } from './Component/layout/Loaders';
import UserManagement from './Pages/admin/UserManagement';
import ChatManagement from './Pages/admin/ChatManagement';
import MassageManagenet from './Pages/admin/MassageManagenet';


const Home = lazy(() => import("./Pages/Home"));
const Login = lazy(() => import("./Pages/Login"));
const Chat = lazy(() => import("./Pages/Chat"));
const Groups = lazy(() => import('./Pages/Groups'));
const NotFound = lazy(() => import('./Pages/NotFound'));
const AdminLogin = lazy(() => import('./Pages/admin/AdminLogin'));
const Dashboard = lazy(() => import('./Pages/admin/Dashboard'));
const Users = lazy(() => import('./Pages/admin/UserManagement'));
const Chats = lazy(() => import('./Pages/admin/ChatManagement'));
const Massages = lazy(() => import('./Pages/admin/MassageManagenet'));





let user = true;

const App = () => {
  return (
    <BrowserRouter> {/* Changed from MemoryRouter for production use */}
      <Suspense fallback={<LayoutLoder />}>
        <Routes>
          {/* Protected Routes */}
          <Route element={<ProtectRoute user={user} />}>
            <Route path='/' element={<Home />} />
            <Route path='/chat/:chatId' element={<Chat />} />
            <Route path='/groups' element={<Groups />} />
          </Route>

          {/* Login Route - only accessible when not logged in */}
          <Route path='/login' element={
            <ProtectRoute user={!user} redirect='/'>
              <Login />
            </ProtectRoute>
          } />
          {/* 404 Not Found */}
          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/user-management' element={<UserManagement />} />
          <Route path='/admin/chat-management' element={<ChatManagement/>} />
          <Route path='/admin/massage-management' element={<MassageManagenet />} />

          <Route path='*' element={<NotFound />} />
        </Routes>

      </Suspense>
    </BrowserRouter>
  );
}

export default App;