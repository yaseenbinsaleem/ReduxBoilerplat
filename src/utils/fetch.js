import axios from "axios";

export const getRequest = async (api, get) => {
  const res = await fetch(api, {
    //fetch mai 2 params api or method jata hai
    method: "GET",
    headers: {
      //   Authorization: localStorage.getItem('token'),
      "Content-Type": "application/json",
      //   Accept: "*/*"
    },
  });
  return await res.json();
};
//getRequest k params mai api or get recieve horaha hai, get=(method mai use horaha hai usse pata lagta hai k kia method perform karna hai)

//RIGHT WAY TO DO IT IS TO GET SECOND PARAM AS type AND USE TO PERFORM METHOD FOR EXAMPLE:
export const Request = async (api, type) => {
  const res = await fetch(api, {
    method: type,
    headers: { "Content-Type": "application/json" },
  });
  return await res.json();
};
//is tarha mai request method manwaunga or 2 params (api aur type i.e get,post,put) bhejdunga or wo perform hojaega or hume postRequest,GetRequest etc banane ki zaroorat nhi

// export const postRequest = async (api, body) => {
//   const res = await fetch(api, {
//     method: 'post',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: localStorage.getItem('token'),
//     },
//     body: JSON.stringify(body),
//   });
//   return await res.json();
// };

// export const putRequest = async (api, body) => {
//   const res = await fetch(api, {
//     method: 'put',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: localStorage.getItem('token'),
//     },

//     body: JSON.stringify(body),
//   });
//   return await res.json();
// };

// export const deleteRequest = async (api, body) => {
//   const res = await fetch(api, {
//     method: 'delete',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: localStorage.getItem('token'),
//     },

//     body: JSON.stringify(body),
//   });
//   return await res.json();
// };

// export const getDataByBody = async (api, body) => {
//   const res = await axios.request({
//     method: 'POST',
//     url: api,
//     headers: {
//       Authorization: localStorage.getItem('token'),
//     },
//     data: body,
//   });
//   return await res.data;
// };

// export const getDataByBodyParams = async (api, body) => {
//   const res = await axios.request({
//     method: 'GET',
//     url: api,
//     headers: {
//       Authorization: localStorage.getItem('token'),
//     },
//     params: body,
//   });
//   return await res.data;
// };
