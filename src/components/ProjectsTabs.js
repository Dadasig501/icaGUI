import React from "react";
import ReactDOM from "react-dom";


class ProjectsTabs extends React.Component {
  state = {
    tabs: [
      { name: "Tab 1", content: "Wow this is tab 1" },
      { name: "Tab 2", content: "Look at me, it's Tab 2" }
    ],
    currentTab: { name: "Tab 1", content: "Wow this is tab 1" }
  };

  createTabs = () => {
    const { tabs, currentTab } = this.state;

    const allTabs = tabs.map(tab => {
      return (
        <li>
          <button
            className={currentTab.name == tab.name ? "tab active" : "tab"}
            onClick={() => this.handleSelectTab(tab)}
          >
            {tab.name}
          </button>
        </li>
      );
    });

    return <ul className="nav nav-tabs">{allTabs}</ul>;
  };

  handleSelectTab = tab => {
    this.setState({
      currentTab: tab
    });
  };

  handleAddTab = () => {
    const { tabs } = this.state;

    const newTabObject = {
      name: `Tab ${tabs.length + 1}`,
      content: `This is Tab ${tabs.length + 1}`
    };

    this.setState({
      tabs: [...tabs, newTabObject],
      currentTab: newTabObject
    });
  };

  render() {
    const { currentTab } = this.state;
    return (
      <div className="container">
        <div className="well">
          <button className="add-tab-button" onClick={this.handleAddTab}>
            <i className="text-primary fas fa-plus-square" /> Add Tab
          </button>
          {this.createTabs()}
          <div className="tab-content">{currentTab.content}</div>
        </div>
      </div>
    );
  }
}

export default ProjectsTabs;