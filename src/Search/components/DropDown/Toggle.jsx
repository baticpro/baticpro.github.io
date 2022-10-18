import { forwardRef } from "react";

export default forwardRef(function Toggle(
    { className = "", value = "", placeholder = "", onFocus, onBlur },
    ref
) {
    return (
        <input
            className={className}
            type="text"
            value={value}
            placeholder={placeholder}
            ref={ref}
            onChange={() => {}}
            onFocus={onFocus}
            onBlur={onBlur}
        />
    );
});
