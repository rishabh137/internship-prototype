import { Suspense } from "react";
import Loader from "./components/common/Loader";
import { Navigate, Routes, Route } from "react-router-dom"
import Header from "./components/Header";
import { routes } from "./routes/routes";

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route exact path={routes.main.path} element={<routes.main.element />} />
          <Route exact path={routes.internship.path} element={<routes.internship.element />} />
          <Route exact path={routes.blog.path} element={<routes.blog.element />} />
          <Route exact path={routes.feedback.path} element={<routes.feedback.element />} />
          <Route exact path={routes.invalid.path} element={<Navigate to={routes.main.path} />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App