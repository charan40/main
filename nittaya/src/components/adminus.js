import React from "react";
import styled from "styled-components";
import wall2 from '../picture/homewallpaper3.jpg'
import wall from '../picture/homewallpaper.jpg'
import logo from '../picture/logo4.jpg'

/* Styled Components */ 
const Header = styled.header`
  background-image: url(${wall});
  text-align: center;
`;

const Logo = styled.img`
  padding: 20px;
  width: auto;
  height: 200px;
`;

const UserPanel = styled.h1`
  font-weight: bold;
  background-color: white;
  padding: 20px;
  border-radius: 50px;
  margin-top: 15px;
  text-align: center;
`;

const Form = styled.form`
  padding: 20px;
  text-align: center;
`;

const FormContainer = styled.div`
  background-image: url(${wall2});
`

const Label = styled.label`
  background-color: burlywood;
  float: left;
  padding: 3px;
  border-radius: 50px;
`;

const LabelOutput = styled.label`
  background-color: burlywood;
  padding-left: 50px;
  padding-right: 100px;
  border-radius: 50px;
`;

const OutputContainer = styled.div`
  background-image: url(${wall2});
  text-align: center;
  padding: 20px;
`;

const Input = styled.input`
  background-color: chocolate;
  border-color: coral;
`;

class Outputs extends React.Component {
  render() {
    return (
      <ul>
        {this.props.result &&
          this.props.result.data.map((res) => {
            return (
              <li>
                <h5 style={{ color: "white" }}>
                  {res.PersonID}({res.FirstName} {res.LastName}) 
                </h5>
                <p style={{ color: "white" }}>Email: {res.Email}</p>
                <p style={{ color: "white" }}>Username: {res.UserN} Password: {res.Pass} Role: {res.uRole}</p>
              </li>
            );
          })}
      </ul>
    );
  }
}

class adminproduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      PersonID: "",
      FirstName: "",
      LastName: "",
      Email: "",
      UserN: "",
      Pass: "",
      uRole: "",
      result: null,
      result2: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.selectAllUser = this.selectAllUser.bind(this);
    this.selectUserByID = this.selectUserByID.bind(this);
    this.insertUser = this.insertUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.selectByRole = this.selectByRole.bind(this);
    this.selectByUName = this.selectByUName.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const elementName = target.name;
    this.setState({
      [elementName]: value
    })
  }
  selectAllUser(event) {
    const url = "http://localhost:3030/persons";
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        this.setState({
          result: data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  selectUserByID(event) {
    alert(this.state.PersonID)
    const url = `http://localhost:3030/person/${this.state.PersonID}`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const usersa = data.data
        console.log(usersa)
        let output;
        output = `<ul>`;
        output += `<li>`;
        output += `<h5 style="color: white">ID : ${usersa.PersonID} ${usersa.FirstName} ${usersa.LastName}</h5>`;
        output += `<p style="color: white">Email: ${usersa.Email}</p>`;
        output += `<p style="color: white">Username: ${usersa.UserN} Password: ${usersa.Pass} Role: ${usersa.uRole}</p>`;
        output += `</li></ul>`;
        let result = document.querySelector("#result2");
        result.innerHTML += output;
      })
      .catch((err) => {
        console.log(err);
      });
    
  }
  selectByUName(event) {
    alert(this.state.FirstName)
    const url = `http://localhost:3030/person/Fname/${this.state.FirstName}`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const products = data.data
        let output;
        output = `<ul>`;
        output += `<li>`;
        output += `<h5 style="color: white">${products.FirstName} ${products.LastName}</h5>`;
        output += `<p style="color: white">Role: ${products.uRole}</p>`;
        output += `</li></ul>`;
        let result = document.querySelector("#result2");
        result.innerHTML += output;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  selectByRole(event) {
    alert(this.state.uRole)
    const url = `http://localhost:3030/person/find/${this.state.uRole}`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "accept": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const products = data.data
        let output;
        output = `<ul>`;
        output += `<li>`;
        // products.forEach((element) => {
        //   output += `<h5 style="color: white">${element.FirstName}(${element.LastName})</h5>`;
        //   output += `<p style="color: white">Price: ${element.uRole}</p>`;
        // })
        output += `<h5 style="color: white">${products.FirstName} ${products.LastName}</h5>`;
        output += `<p style="color: white">Role: ${products.uRole}</p>`;
        output += `</li></ul>`;
        let result = document.querySelector("#result2");
        result.innerHTML += output;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  insertUser(event) {
    const data = {
      Persons: {
        PersonID: this.state.PersonID,
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Email: this.state.Email,
        UserN: this.state.UserN,
        Pass: this.state.Pass,
        uRole: this.state.uRole,
      },
    };

    const url = "http://localhost:3030/person/insert";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Insert success", data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }
  updateUser(event) {
    const data = {
      Persons: {
        PersonID: this.state.PersonID,
        FirstName: this.state.FirstName,
        LastName: this.state.LastName,
        Email: this.state.Email,
        UserN: this.state.UserN,
        Pass: this.state.Pass,
        uRole: this.state.uRole,
      },
    };

    const url = "http://localhost:3030/person/update";
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Update success", data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }
  deleteUser(event){
    const data = {
      PersonID: this.state.PersonID,
    };
    const url = "http://localhost:3030/person/delete";
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Delete success", data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  }
  render() {
    return (
      <div>
        <Header>
          <Logo src={logo} alt="logo" />
          <nav
            className="navbar navbar-expand-sm navbar-dark"
            style={{
              backgroundColor: "rgb(221, 155, 80)",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                width: "40px",
              }}
            />
            {}
            <ul className="navbar-nav ml-auto">
              {}
              <form
                className="form-inline"
                action="/action_page.php"
                id="search"
              >
                <li className="nav-item">
                  <a className="nav-link" href="/adminhome" id="admin1">
                    Back
                  </a>
                </li>
              </form>
            </ul>
          </nav>
        </Header>
        <UserPanel> USER PANEL </UserPanel>
        <div
          className="row"
          style={{
            justifyContent: "left",
            padding: "20px",
          }}
        >
          <div className="col">
            <FormContainer className="container">
              {/* Start Testing User ID */}
              
              {/* End Testing User ID */}
              <Form>
                {/* Start User ID */}
                <Form>
                <Label className="control-label">
                  <h6>Search by Name:</h6>
                </Label>
                <div className="col-sm-10">
                  <input
                    // stud_id2
                    name="FirstName"
                    type="text"
                    className="form-control"
                    // id="id2"
                    placeholder="FirstName"
                    value={this.state.FirstName}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                <Input
                  type="button"
                  value="SELECT"
                  className="btn btn-primary"
                  onClick={this.selectByUName}
                />
                <br />
                <Label className="control-label">
                  <h6>Search by Role:</h6>
                </Label>
                <div className="col-sm-10">
                  <input
                    // stud_id2
                    name="uRole"
                    type="text"
                    className="form-control"
                    // id="id2"
                    placeholder="Role"
                    value={this.state.uRole}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                <Input
                  type="button"
                  value="SELECT"
                  className="btn btn-primary"
                  onClick={this.selectByRole}
                />
              </Form>
              
                <Label className="control-label">
                  <h6>UserID:</h6>
                </Label>
                {/* name="...name..." == value={this.state....name...} */}
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="id"
                    placeholder="User ID"
                    name="PersonID"
                    value={this.state.PersonID}
                    onChange={this.handleChange}
                  />
                </div>{" "}
                <br />
                <Label className="control-label">
                  {/* End User ID */}
                  <h6>User_Firstname:</h6>
                </Label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="fn"
                    placeholder="Firstname"
                    name="FirstName"
                    value={this.state.FirstName}
                    onChange={this.handleChange}
                  />
                </div>{" "}
                <br />
                <Label className="control-label">
                  <h6>User_Lastname:</h6>
                </Label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="ln"
                    placeholder="Lastname"
                    name="LastName"
                    value={this.state.LastName}
                    onChange={this.handleChange}
                  />
                </div>{" "}
                <br />
                <Label className="control-label">
                  <h6>User_Email:</h6>
                </Label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="em"
                    placeholder="Email"
                    name="Email"
                    value={this.state.Email}
                    onChange={this.handleChange}
                  />
                </div>{" "}
                <br />
                <Label className="control-label">
                  <h6>User_Name::</h6>
                </Label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="us"
                    placeholder="User Name:"
                    name="UserN"
                    value={this.state.UserN}
                    onChange={this.handleChange}
                  />
                </div>{" "}
                <br />
                <Label className="control-label">
                  <h6>Password:</h6>
                </Label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="pas"
                    placeholder="User Name:"
                    name="Pass"
                    value={this.state.Pass}
                    onChange={this.handleChange}
                  />
                </div>{" "}
                <br />
                <Label className="control-label">
                  <h6>Role:</h6>
                </Label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="rl"
                    placeholder="Role:"
                    name="uRole"
                    value={this.state.uRole}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                <br />
                <Input
                  type="button"
                  value="INSERT"
                  className="btn btn-primary"
                  onClick={this.insertUser}
                />
                <Input
                  type="button"
                  value="UPDATE"
                  className="btn btn-primary"
                  onClick={this.updateUser}
                />
                <Input
                  type="button"
                  value="DELETE"
                  className="btn btn-primary"
                  onClick={this.deleteUser}
                />
                <Input
                  type="button"
                  value="SELECT"
                  className="btn btn-primary"
                  onClick={this.selectUserByID}
                />
                <Input
                  type="button"
                  value="SELECT ALL"
                  className="btn btn-primary"
                  onClick={this.selectAllUser}
                />
                <br />
                <br />
              </Form>
            </FormContainer>
          </div>
          {/* Start Output */}
          <div className="col">
            <OutputContainer className="container">
              <LabelOutput className="control-label col-sm-2">
                <h6>Output</h6>
              </LabelOutput>
              <Outputs result={this.state.result}></Outputs>
              <div id="result2"></div>
            </OutputContainer>
          </div>
          {/* End Output */}
        </div>
      </div>
    );
  }
}

export default adminproduct;
