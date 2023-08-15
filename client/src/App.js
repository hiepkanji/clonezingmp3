import { useState } from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Home, Login, Public, Personal } from "./containers/public";
import 'react-toastify/dist/ReactToastify.min.css';
import { Routes, Route } from "react-router-dom";
import path from "./ultis/path";
import { useEffect } from "react";
import * as actions from './store/actions'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.getHome())
  }, [])

  return (
    <>
      <div className="">
        <Routes>
          <Route path={path.PUBLIC} element={<Public />}>
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.LOGIN} element={<Login />} />
            <Route path={path.MY_MUSIC} element={<Personal />} />



            <Route path={path.STAR} element={<Home />} />

          </Route>
        </Routes>
      </div >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
    </>
  );
}

export default App;
