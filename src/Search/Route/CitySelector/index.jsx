import { useState, useEffect } from "react";

import DropDown from "../../components/DropDown";
import queryCities from "./queryCities";
import Autocomplete from "./Autocomplete";
import List from "./List";
import ModalSelector from "./ModalSelector";

export default function CitySelector({
    className = "",
    value,
    placeholder,
    onChange,
}) {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        queryCities({ popular: true }).then(({ data }) => setCities(data));
    }, []);

    return (
        <DropDown className={className} value={value} placeholder={placeholder}>
            <DropDown.Toggle>
                {({ className, ...props }, ref) => (
                    <Autocomplete
                        className={className}
                        ref={ref}
                        {...props}
                        updateSuggestions={setCities}
                    />
                )}
            </DropDown.Toggle>
            <DropDown.Menu>
                {({ onClose }) => (
                    <List
                        items={cities}
                        onSelect={(val) => {
                            onChange(val);
                            onClose();
                        }}
                    />
                )}
            </DropDown.Menu>
            <DropDown.ModalMenu>
                {({ onClose }) => (
                    <ModalSelector
                        cities={cities}
                        onSelect={(data) => {
                            onChange(data);
                            onClose();
                        }}
                        onClose={onClose}
                    />
                )}
            </DropDown.ModalMenu>
        </DropDown>
    );
}
