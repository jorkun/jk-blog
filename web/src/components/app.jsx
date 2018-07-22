import React, { Component } from 'react';
import { Link } from "react-router";
import instance from 'utils/instance';
import { Layout, Menu } from 'antd';
const { Header, Content } = Layout;
class App extends Component {
  constructor() {
    super();
    this.state = { title: "" };
  }
  async componentWillMount() {
    try {

      let body = await instance.get("/api/user");
      if (body.data.retcode === "000") {
        this.setState({
          title: body.data.data.title
        })
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (<Layout className="app-root">
      <Header className="header">
        <Link to="/" className="left">
          <i className="icon-logo"></i>
          <span>{this.state.title}</span>
        </Link>
        <Menu
          mode="horizontal"
        >
          <Menu.Item key="blog"><Link to="/blog">博客</Link></Menu.Item>
          <Menu.Item key="comment" to="/comment">留言</Menu.Item>
        </Menu>
      </Header>
      <Content>{this.props.children}</Content>
    </Layout>
    );
  }
}

export default App;
