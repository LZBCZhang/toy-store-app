import React from "react";

const styleListGroup = `
.list-group-item-selector.active:after {
  right: 18px;
  top: 6px;
  color: #95a1a2!important;
  content: "*";
 }
.list-group-item-selector:after {
 position: absolute;
 color: #95a1a2;
 font-size: 24px;
 right: 14px;
 top:-2px;
}
.list-group-item-focus {
 color: #303333;
 text-decoration: none;
 background-color: #f8f9fa;
}
`;

interface ListGroupProps {
    children?: JSX.Element;
    classNames?: string;
    size?: string;
}

const ListGroup : React.FC<ListGroupProps> = ({size="md", classNames, children}) => {
    const top = size === "sm" ? 20 : size === "lg" ? 40 : size === "xl" ? 40 : 32;
    return (
      <div className={`card card-combobox shadow-lg ${classNames}`}
          style={{position: "absolute", width: "100%", right: "0", top: `${top}px`, zIndex: 2000}}>
          <div className={"card-body p-0"}>
              <style type={"text/css"}>{styleListGroup}</style>
          </div>
      </div>
    );
}

export default ListGroup;