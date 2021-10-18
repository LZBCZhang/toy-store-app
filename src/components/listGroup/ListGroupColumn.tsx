import React from "react";

interface ListGroupColumnProps {
    colSize?: number;
    borderLeft?: boolean;
    borderRight?: boolean;
    children?: any;
}

const ListGroupColumn: React.FC<ListGroupColumnProps> = ({colSize = 12, borderLeft = false, borderRight = false, children}) => (
  <div style={{maxHeight: 300, overflowY: 'auto'}} className={`content-col px-0 col-${colSize} ${borderLeft ? "border-left": ""} ${borderRight ? "border-right": ""}`}>
      <div className={"list-group"}>{children}</div>
  </div>
);

export default ListGroupColumn;