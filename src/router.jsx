import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layout";
import { CourseWrapperPage } from "./course/CourseWrapperPage";
import { ROUTES } from "./routes";
import { Lesson } from "./course/Lesson";
import { fetchLessonByIdRouted } from "./responses/fetchLessonById";
import { ErrorPage } from "./responses/errorPage";

export const router = createBrowserRouter([
  {
    path: ROUTES.lessons,
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <CourseWrapperPage />,
      },
      {
        path: ROUTES.lesson(),
        element: <Lesson />,
        loader: fetchLessonByIdRouted,
      },
    ],
  },
]);
