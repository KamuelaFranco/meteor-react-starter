var MyComponent = React.createClass({
  render: function () {
    return (
      <h1>Hello, world!</h1>
    );
  }
});

$(document).ready(function () {
  React.render(
    <MyComponent />,
    document.getElementById('mount-point')
  );
});