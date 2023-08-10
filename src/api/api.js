import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
});

export const usersApi = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`);
  },
};

export const authApi = {
  getAuthUser() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const followApi = {
  follow(userId) {
    return instance.post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
  unfollow(userId) {
    return instance.delete(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
    );
  },
};

export const profileApi = {
  getUserProfile(userId) {
    return instance.get(
      `https://social-network.samuraijs.com/api/1.0/profile/` + userId
    );
  },
  getProfileStatus(userId) {
    return instance.get(`/profile/status/${userId}`);
  },
  updateProfileStatus(status) {
    return instance.put(`/profile/status`, { status: status });
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`/profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};

export const securityApi = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};
