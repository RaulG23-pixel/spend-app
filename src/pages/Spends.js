import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import Indicator from "../components/indicators/Indicator";
import ReactAnime from "react-animejs";
import DataTable from "../components/DataTable";
import "./css/spends.css";
import { getUser } from "../services/userService";
import { getAccessToken } from "../utils/utils";
import { setUser } from "../store/userSlice";

function CreateSpend() {
  const { Anime } = ReactAnime;
  const user = useSelector((state) => state.userData);
  const dispatch = useDispatch();

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
  if (user) {
    const { username } = user;

    return (
      <>
        <div className="app_container">
          <section className="main_container">
            <header>
              <h1 className="title_user">Spends</h1>
              <span className="subtitle">
                Here you can see all your current spends
              </span>
            </header>
            <section className="spend__graphic_section">
              <section className="spend__indicators">
                <Indicator />
                <article className="percentage_displayer">
                  <ul className="spend__dataList">
                    <Anime
                      initial={[
                        {
                          targets: "#percentage1",
                          innerText: [0, 100],
                          easing: "linear",
                          round: true,
                          duration: 600,
                        },
                        {
                          targets: "#percentage2",
                          innerText: [0, 50],
                          easing: "linear",
                          round: true,
                          duration: 600,
                        },
                        {
                          targets: "#percentage3",
                          innerText: [0, 30],
                          easing: "linear",
                          round: true,
                          duration: 600,
                        },
                      ]}
                    >
                      <li className="dataList_item">
                        <div>
                          <span className="dataList_color_reference dataList_yellow"></span>{" "}
                          <span className="dataList_title">Total</span>
                        </div>
                        <span className="data_percentage" id="percentage1">
                          80%
                        </span>
                      </li>
                      <li className="dataList_item">
                        <div>
                          <span className="dataList_color_reference dataList_pink"></span>
                          <span className="dataList_title">Completed</span>
                        </div>
                        <span className="data_percentage" id="percentage2">
                          92%
                        </span>
                      </li>
                      <li className="dataList_item">
                        <div>
                          <span className="dataList_color_reference dataList_blue"></span>
                          <span className="dataList_title">Incomplete</span>
                        </div>
                        <span className="data_percentage" id="percentage3">
                          73%
                        </span>
                      </li>
                    </Anime>
                  </ul>
                </article>
              </section>
            </section>
            <div className="creation_and_frequents">
              <section className="spend__create_banner">
                <h2>Create spend</h2>
                <span>
                  You need to create a new spend? No problem, in the create
                  section you can create a new one.
                </span>
                <button>Create spend</button>
                <i className="fas fa-book spend__banner_icon"></i>
              </section>
              <section className="spend__frecuent_spends">
                <h2>Frecuent spends</h2>
                <ul className="frecuent_spends_container">
                  <li className="frecuent_spend_item">
                    <div className="color_indicator circle1"></div>
                    <div className="frecuent_spend_data">
                      <h4 className="item_title">Saldo telefono</h4>
                      <div className="progress_container">
                        <div className="progress_bar">
                          <div
                            className="bar bar1"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                        <span>50%</span>
                      </div>
                    </div>
                  </li>
                  <li className="frecuent_spend_item">
                    <div className="color_indicator circle2"></div>
                    <div className="frecuent_spend_data">
                      <h4 className="item_title">chocolates</h4>
                      <div className="progress_container">
                        <div className="progress_bar">
                          <div
                            className="bar bar2"
                            style={{ width: "40%" }}
                          ></div>
                        </div>
                        <span>40%</span>
                      </div>
                    </div>
                  </li>
                  <li className="frecuent_spend_item">
                    <div className="color_indicator circle3"></div>
                    <div className="frecuent_spend_data">
                      <h4 className="item_title">Rufles</h4>
                      <div className="progress_container">
                        <div className="progress_bar">
                          <div
                            className="bar bar3"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                        <span>60%</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
            <section className="dataTable_section">
              <h2 className="spend__section_title">Latest spends</h2>
              <DataTable />
            </section>
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

export default CreateSpend;
