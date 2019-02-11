import React from "react";
import { IndexLink, Link } from "react-router";

export default class ProfileBar extends React.Component {
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
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li>
                <p class="navbar-text"><b>Profile Name</b></p>
              </li>
              <li>
                <p class="navbar-text"><b>Profile ID</b></p>
              </li>
              <li>
                <p class="navbar-text"><b>Gender</b></p>
              </li>
              <li>
                <p class="navbar-text"><b>Notifications</b></p>
              </li>
              <li>
                <p class="navbar-text"><b>Edit Profile</b></p>
              </li>
              <li>
                <p class="navbar-text navbar-right"><b>Logout</b></p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
