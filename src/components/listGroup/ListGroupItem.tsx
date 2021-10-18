import React, {useCallback, useEffect, useState} from "react";
import {noop} from "../utils";

export interface ListGroupItemProps {
    id?: string;
    label: string;
    selected?: boolean;
    highlighted?: boolean;
    className?: string;
    onSelectionChange: (id: string, isSelected: boolean) => void;
    isGroupItem?: Boolean;
    setDisplayDescription?: (id: string, value: boolean) => void;
}

const ListGroupItem : React.FC<ListGroupItemProps> = ({id, label, selected, className= "", onSelectionChange,
    isGroupItem = false, setDisplayDescription= noop}) => {

    const [selectedItem, setSelectedItem] = useState<boolean>(selected || false);

    useEffect(()=> setSelectedItem(selected || false), [selected, setSelectedItem]);

    const activeClassNames = selectedItem ? "list-group-item active" : "";
    const handleOnClick = useCallback(() => {
        setSelectedItem(!selectedItem);
        onSelectionChange(id || label, !selectedItem);
    }, [onSelectionChange]);

    const mouseOverHandle = useCallback((id: string) => {
        setDisplayDescription(id, true);
    }, [setDisplayDescription]);

    const mouseLeaveHandle = useCallback((id: string) => {
        setDisplayDescription(id, false);
    }, [setDisplayDescription]);

    return (
      <div key={id} onClick={handleOnClick} onMouseOver={() => mouseOverHandle(id!)}
       onMouseLeave={() => mouseLeaveHandle(id!)}
           style={{cursor: 'pointer', border: !isGroupItem ? "none" : ""}}
           className={`pl-3 list-group-item list-group-item-action ${activeClassNames} ${!isGroupItem ? "list-group-item-selector": ""} ${className}`}
      >
          {label}
      </div>
    );
};

