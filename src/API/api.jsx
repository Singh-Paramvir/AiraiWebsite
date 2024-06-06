
// import axios from "axios";


// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     try {
//       const data = req.body;
      
//       console.log(data, "param ");
    
//       var config = {
//         method: "post",
//         url: "http://airaicloud.com:6000/api/v1/auth/adminlogin",
//         data,
       
//       };
      
//       await axios(config).then(function (response) {
     
//         res.status(200).json({ data: response.data});
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json({ Error: err });
//     }
//   }
// }
