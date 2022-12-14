import React from "react";
import { Route, Redirect } from "react-router-dom";
import { KidViews } from "./KidViews";
import { KidNavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { KidRegister } from "./auth/KidRegister";
import { ParentViews } from "./views/ParentViews";
import { ParentNavBar } from "./nav/ParentNavBar";
import "./Clothes.css";
import { isStaff } from "../utils/isStaff";
import { ParentRegister } from "./auth/ParentRegister";

export const GirlsClothes = () => {

  return (
    <>
      <Route
        render={() => {
          if (localStorage.getItem("clothesuser")) {
            if (isStaff()) {
              return <>
                  <ParentNavBar />
                  <ParentViews />
                </>
            }
            else {
              return <>
                  <KidNavBar />
                  <KidViews />
                </>
            }
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />

      <Route path="/login">
        <Login />
      </Route>
      <Route path="/registerkid">
        <KidRegister />
      </Route>
      <Route path="/registerparent">
        <ParentRegister />
      </Route>
    </>
  )
}