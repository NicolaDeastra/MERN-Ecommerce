import React from "react";
import MyButton from "../utils/button";

const RegisterLogin = () => {
  return (
    <div className="page_wrapper">
      <div className="container">
        <div className="register_login_container">
          <div className="left">
            <h1>New Customers</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              reprehenderit beatae impedit vel, voluptatum facere repellat
              excepturi nesciunt dolores non facilis veniam ut nam aut molestias
              ducimus, alias quod repellendus. Quo animi laudantium obcaecati
              ratione fugit nemo? Nesciunt!
            </p>
            <MyButton
              type="default"
              title="Create an account"
              linkTo="/register"
              addStyle={{
                margin: "10px 0 0 0"
              }}
            />
          </div>
          <div className="right">
            <h2>Registered Customers</h2>
            <p>If you have an account please log in.</p>
            LOGIN
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterLogin;
