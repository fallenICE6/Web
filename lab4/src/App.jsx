import './App.css';
import { List } from './List';
import { Details } from './Details';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/:id",
    element: <Details />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
