import React from "react";

function TodoHeader({ children, loading }) {
  return (
    <header>
      {/* Se clona los children y el segundo argumento son las propiedades que queremos tenga nuestro clon  */}
      {
      React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading })
      )}
    </header>
  );
}
export { TodoHeader };
