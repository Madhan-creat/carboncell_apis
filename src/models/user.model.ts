import Connect from "../configs/mysql";
import Query from "../configs/mysql";

const userRegisterModel = async (
  name: string,
  email: string,
  encryptedpassword: string,
  userIsExist: boolean
) => {
  let query = `insert into users (user_name,user_email,user_password) values ('${name}','${email}','${encryptedpassword}')`;
  if (userIsExist) {
    query = `update user set user_name ='${name}',user_password='${encryptedpassword}' where user_email='${email}'`;
  }
  return new Promise((resolve, reject) => {
    Connect.Connect()
      .then((connection) => {
        Query.Query(connection, query)
          .then((result) => {
            resolve(result);
          })
          .catch((error) => {
            reject(error);
          })
          .finally(() => {
            connection.end();
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const userLoginModel = async (email: string) => {
  let query = `select * from users where user_email='${email}'`;
  console.log(query);
  
  return new Promise((resolve, reject) => {
    Connect.Connect()
      .then((connection: any) => {
        Query.Query(connection, query)
          .then((result: any) => {
            resolve(result);
          })
          .catch((error) => {
            reject(error);
          })
          .finally(() => {
            connection.end();
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const userModel = {
  userRegisterModel: userRegisterModel,
  userLoginModel: userLoginModel,
};
export default userModel;
