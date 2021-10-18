import {ErrorProps, TagItem} from "./combobox.typing";
import React, {ChangeEvent, FormEvent} from "react";
import {noop} from "../utils";

export interface InputTagProps extends ErrorProps {
    tags?: TagItem[];
    onBlur?: (event: any) => void;
    onFocus?: (event: any) => void;
    onTermChange: (value: string) => void;
    onKeyUp?: (event: any) => void;
    onUnSelect?: (itemId: string) => void;
    placeholder?: string;
    value: string | null;
}

const InputTags: React.FC<InputTagProps> = ({inError, value, errorMessage, onBlur, onFocus, onTermChange, onKeyUp, placeholder}) => {
    return (
     <>
         <div className={"input-group input-group-merged"} style={{width: "85%"}}>
             <input style={{outline: "none"}} type={"text"} className={"border-0 bg-transparent w-100"}
              value={value || ""}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onKeyUp={onKeyUp || noop}
                    placeholder={placeholder}
                    onChange={(event:ChangeEvent<HTMLInputElement>) => onTermChange(event.target.value)}
                    onInput={(event: any) => onTermChange(event.target.value)}

             />
         </div>
         {inError && errorMessage && <div className={"danger"} style={{display: "block"}}>{errorMessage}</div>}
     </>
    );
};

export default InputTags;