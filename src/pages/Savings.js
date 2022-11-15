import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import LineSavings from "../components/charts/savings/LineSavings";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAccessToken } from "../utils/utils";
import { getUser } from "../services/userService";
import { setUser } from "../store/userSlice";
import ilustration from "../assets/ilustration3.svg";
import Modal from "../components/Modal";
import "./css/saves.css";

function Savings() {
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();
  const [isModalActive, setIsModalActive] = useState(false);

  useEffect(() => {
    const token = getAccessToken();

    if (token && !user) {
      const userToken = JSON.parse(token);
      getUser(userToken)
        .then((user) => {
          dispatch(setUser(user.data));
        })
        .catch((err) => console.log(err));
    }
  }, [dispatch, user]);

  const closeModal = () => {
    setIsModalActive(false);
  };

  if (user) {
    const { username } = user;
    return (
      <>
        <div className="app_container">
          <section className="main_container">
            <header>
              <h1 className="title_user">Savings</h1>
              <span className="subtitle">Here you can see all your saves</span>
            </header>
            <section className="savings">
              <div className="row savings__header_flex">
                <div className="savings__header">
                  <h2>Total</h2>
                  <span>24.00$</span>
                  <i className="fas fa-dollar-sign savings_icon"></i>
                </div>
                <div className="savings__create_spend">
                  <img
                    src={ilustration}
                    className="create_spend__ilustration"
                    alt="create spend ilustration"
                  />
                  <h4>Create a new saving</h4>
                  <span>Store all your information about savings</span>
                  <button
                    className="savings__btn_create"
                    onClick={() => {
                      setIsModalActive(true);
                    }}
                  >
                    Create
                  </button>
                </div>
              </div>
              <div className="savings__content">
                <h4>This week</h4>
                <div className="savings_chart__container">
                  <LineSavings />
                </div>
                <div className="row">
                  <div>
                    <h4>Your savings</h4>
                  </div>
                </div>
              </div>
            </section>
            <Modal
              isActive={isModalActive}
              closeModal={closeModal}
              type={"createSaving"}
            />
          </section>
          <Sidebar user={username} />
        </div>
      </>
    );
  }
  return (
    <div className="loaderContainer">
      <div className="loader">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Savings;
