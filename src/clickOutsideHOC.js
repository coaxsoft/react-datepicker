import React from "react";
import ReactDOM from "react-dom";


function handleClickOutside(Component) {
  class EnhancedComponent extends React.Component {
    constructor(props) {
      super(props);

      this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
      document.addEventListener("click", this.handleClickOutside, true);
    }

    componentWillUnmount() {
      document.removeEventListener("click", this.handleClickOutside, true);
    }

    handleClickOutside(e) {
      const domNode = this.__domNode;
      if (
        (!domNode || !domNode.contains(e.target)) &&
        this.__wrappedInstance &&
        typeof this.__wrappedInstance.handleClickOutside === "function"
      ) {
        this.__wrappedInstance.handleClickOutside(e);
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          ref={c => {
            this.__wrappedInstance = c;
            this.__domNode = ReactDOM.findDOMNode(c);
          }}
        />
      );
    }
  }

  return EnhancedComponent;
}

export default handleClickOutside;
