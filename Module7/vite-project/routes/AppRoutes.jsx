import { Routes, Route } from "react-router-dom";

import Homepage from "../pages/Homepage";
import DashboardPage from "../pages/DashboardPage";
import { DashboardMessages } from "../pages/DashboardPage";
import { DashboardTasks } from "../pages/DashboardPage";
import AboutPage from "../pages/AboutPage";
import PageNotFound from "../pages/PageNotFound";
import PostsPage, { Post, PostList } from "../pages/PostsPage";
import ProtectedRoute from "../pages/ProtectedRoute";
import LoginForm from "../components/LoginForm";

function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />
      {/* nested routes, matches on /dash/messages etc */}
      <Route
        path="dash"
        element={
          <ProtectedRoute>
            <DashboardPage {...props} />
          </ProtectedRoute>
        }
      >
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      <Route path="login" element={<LoginForm />} />

      <Route path="/about" element={<AboutPage {...props} />} />
      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        {/* dynamic param taken from route, stored in variable called id */}
        <Route path=":id" element={<Post />} />
      </Route>
    </Routes>
  );
}
export default AppRoutes;
