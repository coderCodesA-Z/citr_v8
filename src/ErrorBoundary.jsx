import { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // logging service goes here like sentry or trackJS or new relic
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.errorComponent;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
