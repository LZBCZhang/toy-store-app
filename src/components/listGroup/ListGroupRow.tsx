import React from "react";

interface ListGroupRowProps {
    children?: any;
}

const ListGroupRow: React.FC<ListGroupRowProps> =({children}) => <div className={"content-row row no-gutters"}>
    {children}
</div> ;

export default ListGroupRow;