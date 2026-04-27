import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import ExerciseDetail from "./Pages/ExerciseDetail";
import Layout from "./Layouts/Layout";
function App() {
  return (
    <>
      <div className="flex w-full flex-col h-screen">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
