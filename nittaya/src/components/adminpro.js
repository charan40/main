import React from "react";
import styled from 'styled-components';
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

const ProductPanel = styled.h1`
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
                  {res.MIDs}({res.MName})
                </h5>
                <p style={{ color: "white" }}>Price: {res.MPrice}</p>
              </li>
            );
          })}
      </ul>
    );
  }
}

class adminuser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      MIDs: "",
      MName: "",
      MPrice: "",
      MDetail: "",
      MIngredient: "",
      category_id: "",
      result: null,
      result2: null
    }
    
    this.handleChange = this.handleChange.bind(this);
    this.selectAllMenu = this.selectAllMenu.bind(this);
    this.selectByID = this.selectByID.bind(this);
    this.selectByNAME = this.selectByNAME.bind(this);
    this.selectBycate = this.selectBycate.bind(this);
    this.insertMenu = this.insertMenu.bind(this);
    this.updateMenu = this.updateMenu.bind(this);
    this.deleteMenu = this.deleteMenu.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const elementName = target.name;
    this.setState({
      [elementName]: value
    })
  }
  /* Test with get menu */
  selectAllMenu(event) {
    const url = "http://localhost:3030/menus";
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
  selectByID(event) {
    const url = `http://localhost:3030/menu/${this.state.MIDs}`;
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
        const product = data.data
        console.log(product)
        let output;
        output = `<ul>`;
        output += `<li>`;
        output += `<h5 style="color: white">${product.MIDs}(${product.MName})</h5>`;
        output += `<p style="color: white">Price: ${product.MPrice}</p>`;
        output += `</li></ul>`;
        let result = document.querySelector("#result2");
        result.innerHTML += output;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  selectByNAME(event) {
    alert(this.state.MName)
    const url = `http://localhost:3030/menu/name/${this.state.MName}`;
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
        products.forEach((element) => {
          output += `<h5 style="color: white">${element.MIDs}(${element.MName})</h5>`;
          output += `<p style="color: white">Price: ${element.MPrice}</p>`;
        })
        output += `</li></ul>`;
        let result = document.querySelector("#result2");
        result.innerHTML += output;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  selectBycate(event) {
    const url = `http://localhost:3030/menu/cate/${this.state.category_id}`;
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
        console.log(products)
        let output;
        output = `<ul>`;
        output += `<li>`;
        products.forEach((element) => {
          output += `<h5 style="color: white">${element.MIDs}(${element.MName})</h5>`;
          output += `<p style="color: white">Price: ${element.MPrice}</p>`;
        })
        output += `</li></ul>`;
        let result = document.querySelector("#result2");
        result.innerHTML += output;
      })
      .catch((err) => {
        console.log(err);
      });
  }
  insertMenu(event) {
    const data = {
      Menu: {
        MIDs: this.state.MIDs,
        MName: this.state.MName,
        MPrice: this.state.MPrice,
        MDetail: this.state.MDetail,
        MIngredient: this.state.MIngredient,
        category_id: this.state.category_id,
      },
    };
    const data2 = {
      Menu: {
        MIDs: 20012,
        MName: "MK X Fire Tiger",
        MPrice: 79,
        MDetail: null,
        MIngredient: null,
        category_id: 2,
      },
    };
    const url = "http://localhost:3030/menu/insert";
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
  updateMenu(event) {
    const data = {
      Menu: {
        MIDs: this.state.MIDs,
        MName: this.state.MName,
        MPrice: this.state.MPrice,
        MDetail: this.state.MDetail,
        MIngredient: this.state.MIngredient,
        category_id: this.state.category_id,
      },
    };
    const data2 = {
      Menu: {
        MIDs: 20012,
        MName: "MK X Fire Tiger BIG XXXXX",
        MPrice: 79,
        MDetail: null,
        MIngredient: null,
        category_id: 2,
      },
    };
    const url = "http://localhost:3030/menu/update";
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
  deleteMenu(event){
    const data = {
      MIDs: this.state.MIDs,
    };
    const data2 = {
      MIDs: "20011"
    };
    const url = "http://localhost:3030/menu/delete";
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
        <ProductPanel>PRODUCT PANEL</ProductPanel>
        <div
          className="row"
          style={{
            justifyContent: "left",
            padding: "20px",
          }}
        >
          <div className="col">
            <FormContainer className="container">
              {/* Start Testing Menu ID */}
              <Form>
                <Label className="control-label">
                  <h6>Search by Name:</h6>
                </Label>
                <div className="col-sm-10">
                  <input
                    // stud_id2
                    name="MName"
                    type="text"
                    className="form-control"
                    // id="id2"
                    placeholder="Menu Name"
                    value={this.state.MName}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                <Input
                  type="button"
                  value="SELECT"
                  className="btn btn-primary"
                  onClick={this.selectByNAME}
                />
              </Form>
              <Form>
                <Label className="control-label">
                  <h6>Search by Category:</h6>
                </Label>
                <div className="col-sm-10">
                  <input
                    // stud_id2
                    name="category_id"
                    type="text"
                    className="form-control"
                    // id="id2"
                    placeholder="category_id"
                    value={this.state.category_id}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                <Input
                  type="button"
                  value="SELECT"
                  className="btn btn-primary"
                  onClick={this.selectBycate}
                />
              </Form>
              {/* End Testing Menu ID */}
              <Form>
                {/* Start Menu ID */}
                <Label>
                  <h6>Menu_ID:</h6>
                </Label>
                <div className="col-sm-10">
                  <input
                    // stud_id2
                    name="MIDs"
                    type="text"
                    className="form-control"
                    id="id2"
                    placeholder="Menu ID"
                    value={this.state.MIDs}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                {/* End Menu ID */}
                {/* Start Menu Name */}
                <Label>
                  <h6>Menu_Name:</h6>
                </Label>
                <div className="col-sm-10">
                  <input
                    name="MName"
                    type="text"
                    className="form-control"
                    id="fn2"
                    placeholder="Menu Name"
                    value={this.state.MName}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                {/* End Menu Name */}
                {/* Start Price */}
                <Label>
                  <h6>Price:</h6>
                </Label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="ln2"
                    placeholder="Price"
                    name="MPrice"
                    value={this.state.MPrice}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                {/* End Price */}
                {/* Start Detail */}
                <Label>
                  <h6>Detail:</h6>
                </Label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="em2"
                    placeholder="Detail"
                    name="MDetail"
                    value={this.state.MDetail}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                {/* End Detail */}
                {/* Start Ingredient */}
                <Label>
                  <h6>Ingredient:</h6>
                </Label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="us2"
                    placeholder="Ingredient"
                    name="MIngredient"
                    value={this.state.MIngredient}
                    onChange={this.handleChange}
                  />
                </div>
                <br />
                {/* End Ingredient */}
                {/* Start Category ID */}
                <Label>
                  <h6>category_id:</h6>
                </Label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="pas2"
                    placeholder="category id"
                    name="category_id"
                    value={this.state.category_id}
                    onChange={this.handleChange}
                  />
                </div>{" "}
                <br /> <br />
                {/* End Category ID */}
                {/* Start Buttons */}
                <Input
                  type="button"
                  value="INSERT"
                  className="btn btn-primary"
                  onClick={this.insertMenu}
                />
                <Input
                  type="button"
                  value="UPDATE"
                  className="btn btn-primary"
                  onClick={this.updateMenu}
                />
                <Input
                  type="button"
                  value="DELETE"
                  className="btn btn-primary"
                  onClick={this.deleteMenu}
                />
                <Input
                  type="button"
                  value="SELECT"
                  className="btn btn-primary"
                  onClick={this.selectByID}
                />
                <Input
                  type="button"
                  value="SELECT ALL"
                  className="btn btn-primary"
                  onClick={this.selectAllMenu}
                />
                {/* End Buttons */}
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
              <Outputs result={this.state.result} />
              <div id="result2"></div>
            </OutputContainer>
          </div>
          {/* End Output */}
        </div>
      </div>
    );
  }
}

export default adminuser;
