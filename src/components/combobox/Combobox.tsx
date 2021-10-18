import {ErrorProps, TagItem} from "./combobox.typing";
import React, {useCallback, useEffect, useState} from "react";
import {noop} from "../utils";
import useComponentVisible from "../hooks/useComponentVisible";
import InputTags from "./InputTags";
import InputToggleButton from "./InputToggleButton";

interface ComboboxProps extends ErrorProps {
    placeholder?: string;
    renderListGroup: () => JSX.Element;
    size?: string;
    onValueChanged?: (value: string) => void;
    searchTerm?: string;
    onKeyUp?: (event: KeyboardEvent) => void;
    tags?: TagItem[];
    displayDropdown?: boolean;
    onUnSelect?: (itemId: string) => void;
}

const Combobox: React.FC<ComboboxProps> = ({searchTerm, inError, errorMessage,
                                               placeholder, onValueChanged, renderListGroup,
tags=[], onKeyUp = noop, onUnSelect = noop, displayDropdown}) => {
    const [term, setTerm] = useState<string|null>(searchTerm || null);
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(displayDropdown || false);

    useEffect(() => setTerm(searchTerm || ""), [searchTerm]);

    useEffect(()=> {
       setIsComponentVisible(displayDropdown || false);
    });

    const handleToggleDropdown = useCallback((isDropdownShown: boolean) => {
       setIsComponentVisible(isDropdownShown);
    }, [setIsComponentVisible]);

    const handleTermChange = useCallback((term: string) => {
       const onChange = onValueChanged || noop;
       setTerm(term);
       onChange(term);
    }, [onValueChanged]);

    const handleOnHasFocus = useCallback(() => {
        setIsComponentVisible(true);
    }, [setIsComponentVisible]);

    const handleUnSelectTag = useCallback((tagItem: string) => {
       onUnSelect(tagItem);
    }, [onUnSelect]);

    return (
        <div className={"input-group py-0 form-group form-control d-flex align-items-center flex-wrap"} ref={ref}>
            <div className={"input-group-append input-group-merged"}>
                <div className={"btn-group"}>
                    <InputToggleButton toggle={isComponentVisible} onToggle={() => handleToggleDropdown(!isComponentVisible)} />
                </div>
            </div>
            <InputTags value={term || ""} tags={tags} placeholder={placeholder}
                       inError={inError} onTermChange={handleTermChange}
                       onFocus={handleOnHasFocus} onKeyUp={onKeyUp} onUnSelect={handleUnSelectTag} />
            {isComponentVisible && renderListGroup()}
        </div>
    )
};

export default Combobox;