import Dashboard from "../Components/Dashboard";
import AddBook from "../Components/AddBook";
import EditBook from "../Components/EditBook";
import AuthorRecords from "../Components/AuthorRecords";
import AddAuthor from "../Components/AddAuthor";
import EditAuthor from "../Components/EditAuthor";
import { Navigate } from "react-router-dom";

const AppRoutes = [
  {
    path: "/dashboard",
    exact: true,
    element: <Dashboard />,
  },
  {
    path: "/add-book",
    exact: true,
    element: <AddBook />,
  },
  {
    path: "/edit/:id",
    exact: true,
    element: <EditBook />,
  },
  {
    path: "/author-records",
    exact: true,
    element: <AuthorRecords />,
  },
  {
    path: "/add-author",
    exact: true,
    element: <AddAuthor />,
  },
  {
    path: "/edit-author/:id",
    exact: true,
    element: <EditAuthor />,
  },
  {
    path: "*",
    exact: false,
    element: <Navigate to="/dashboard" />,
  },
];

export default AppRoutes;