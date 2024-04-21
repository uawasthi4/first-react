import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "test",
        location: "test",
        avatar_url: "dummy_photo",
      },
    };
    console.log(this.props.name + ": Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + ": Child ComponentDidMount");
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState) {
    // if(this.state.count !== prevState.count || this.state.count2 !== prevState.count2) {  ------> Equivalent to useEffect(() => {}, [count, count2]);
    // Perform something
    // }

    console.log(this.props.name + ": Child componentDidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.name + ": Child componentWillUnmount");
  }

  async fetchData() {
    const resJson = await fetch("https://api.github.com/users/uawasthi4");
    const data = await resJson.json();
    this.setState({ userInfo: data });
  }

  render() {
    const { name, location, url, avatar_url } = this.state.userInfo;
    console.log(this.props.name + ": Child Render");
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Website: {url}</h4>
      </div>
    );
  }
}

export default UserClass;

// Case with multiple children

// Parent Render phase - contructor + render

// Child1 render phase - Constructor + Render
// child2 render phase - Constructor + Render

// DOM updated in a single batch(by combining for both the children)

// child1 commit phase - ComponentDidMount
// child2 commit phase - ComponentDidMount

// Parent commit phase - componentdidmount

/**
 * Whole life cycle -
 *
 * MOUNTING CYCLE -
 *
 * Constructor (dummy)
 * Render
 * <HTML> (Dummy data)
 * componentDidMount
 * <API Call>
 * this.setState() - Triggers the reconciliation mechanism and state variable is updated
 *
 * UPDATING CYCLE -
 *
 * Render (API Data or Updated Data)
 * <HTML> (API Data)
 * componentDidUpdate
 *
 *
 * */
