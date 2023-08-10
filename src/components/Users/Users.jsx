import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Users.module.css";
import { followApi } from "../../api/api";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let x = 1; x <= pagesCount && x <= 30; x++) {
    pages.push(x);
  }

  return (
    <div className={s.container}>
      <div className={s.titleFrame}>
        <h1 className={s.title}>Users</h1>
        {props.isFetching ? (
          <img src="/preloader.svg" alt="preloader" className={s.preloader} />
        ) : null}
      </div>
      <div className={s.pagesCnt}>
        {pages.map((p) => {
          return (
            <span
              className={
                props.currentPage === p ? s.pageNumberActive : s.pageNumber
              }
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      <div className={s.usersFrame}>
        {props.users.map((user) => (
          <div key={user.id} className={s.userFrame}>
            <div className={s.userAvatarFrame}>
              <NavLink to={"/profile/" + user.id}>
                <img
                  className={s.userAvatar}
                  src={!user.photos.large ? "avatar.png" : user.photos.large}
                  alt="avatar"
                />
              </NavLink>
            </div>
            <div className={s.userInfo}>
              <div className={s.userInfoCnt1}>
                <h1>{user.name}</h1>
                <p>{user.status}</p>
              </div>
              <div className={s.userInfoCnt2}>
                {user.followed ? (
                  <button
                    className={s.userBtn}
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className={s.userBtn}
                    disabled={props.followingInProgress.some(
                      (id) => id === user.id
                    )}
                    onClick={() => {
                      props.follow(user.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
