// import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from "react-admin";
// if (type === AUTH_LOGIN) {
//   const { name, password } = params;
//   const request = new Request("http://localhost:3000/users", {
//     method: "POST",
//     body: JSON.stringify({ name, password }),
//     headers: new Headers({ "Content-Type": "application/json" }),
//   });

//   return fetch(request)
//     .then((response) => {
//       if (response.status < 200 || response.status >= 300) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     })
//     .then(({ token }) => {
//       localStorage.setItem("token", token);
//     });
// }
// return Promise.resolve();

// export default (type, params) => {
//   // called when the user attempts to log in
//   if (type === AUTH_LOGIN) {
//     const { username } = params;
//     localStorage.setItem("username", username);
//     // accept all username/password combinations
//     return Promise.resolve();
//   }
//   // called when the user clicks on the logout button
//   if (type === AUTH_LOGOUT) {
//     localStorage.removeItem("username");
//     return Promise.resolve();
//   }
//   // called when the API returns an error
//   if (type === AUTH_ERROR) {
//     const { status } = params;
//     if (status === 401 || status === 403) {
//       localStorage.removeItem("username");
//       return Promise.reject();
//     }
//     return Promise.resolve();
//   }
//   // called when the user navigates to a new location
//   if (type === AUTH_CHECK) {
//     return localStorage.getItem("username")
//       ? Promise.resolve()
//       : Promise.reject();
//   }
//   return Promise.reject("Unknown method");
// };
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_CHECK,
  AUTH_GET_PERMISSIONS,
} from "react-admin";

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { name, password } = params;
    const request = new Request("http://localhost:5001/users", {
      method: "GET",
      users: JSON.stringify({ name, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ token }) => {
        localStorage.setItem("token", token);
      });
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    return Promise.resolve();
  }
  if (type === AUTH_ERROR) {
    // ...
  }
  if (type === AUTH_CHECK) {
    return localStorage.getItem("token") ? Promise.resolve() : Promise.reject();
  }
  if (type === AUTH_GET_PERMISSIONS) {
    const role = localStorage.getItem("role");
    return role ? Promise.resolve(role) : Promise.reject();
  }
  return Promise.reject("Unknown method");
};
