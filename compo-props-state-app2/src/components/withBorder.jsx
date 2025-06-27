function withBorder(WrappedComponent) {
  return function EnhancedComponent() {
    return (
      <div
        style={{ border: "2px solid blue", padding: "10px", margin: "10px" }}
      >
        <WrappedComponent />
      </div>
    );
  };
}

export default withBorder;
