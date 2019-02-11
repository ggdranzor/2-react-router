import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const dashboardClass = location.pathname === "/" ? "active" : "";
    const uploaddataClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const responseClass = location.pathname.match(/^\/response/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-default fixedtop2" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class={dashboardClass}>
                <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>Dashboard</IndexLink>
              </li>
              <li class={uploaddataClass}>
                <Link to="uploaddata" onClick={this.toggleCollapse.bind(this)}>Upload Data</Link>
              </li>
              <li class={responseClass}>
                <Link to="response" onClick={this.toggleCollapse.bind(this)}>Response</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
