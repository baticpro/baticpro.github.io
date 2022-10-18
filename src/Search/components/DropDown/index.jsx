import { useRef, useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import DefaultToggle from "./Toggle";
import useClickOut from "./useClickOut";
import styles from "./DropDown.module.css";

function DropDown({ className = "", placeholder = "", value, children }) {
    const [isFocus, setFocus] = useState();
    const input = useRef();
    const isModal = window.matchMedia("(max-width: 600px)").matches;
    const root = useClickOut(
        () => setFocus(),
        () => input.current?.focus() // нужно чтобы onBlur сработал
    );

    const childrenArray = Array.isArray(children) ? children : [children];
    const ModalMenu = childrenArray.find(
        (child) => child.type === DropDown.ModalMenu
    )?.props.children;
    const Menu = childrenArray.find((child) => child.type === DropDown.Menu)
        ?.props.children;
    const foundToggle = childrenArray.find(
        (child) => child.type === DropDown.Toggle
    )?.props.children;
    const Toggle = foundToggle || DefaultToggle.render;

    useEffect(() => {
        document.body.style.overflow = isModal && isFocus ? "hidden" : null;
    }, [isFocus, isModal]);

    function onClose() {
        input.current?.blur();
        setFocus();
    }

    return (
        <div
            ref={root}
            className={`${styles.dropDown} ${className}`}
            onBlur={(ev) => {
                if (ev.relatedTarget) {
                    setFocus(ev.currentTarget.contains(ev.relatedTarget));
                }
            }}
        >
            {Toggle(
                {
                    value,
                    placeholder: placeholder,
                    className: styles.input,
                    isFocus,
                    isModal,
                    onFocus: () => setFocus(true),
                },
                input
            )}

            {isModal ? (
                <CSSTransition
                    in={isFocus}
                    timeout={{ enter: 0, exit: 400 }}
                    unmountOnExit
                    classNames={{
                        enter: styles.modalEnter,
                        enterDone: styles.modalEnterDone,
                        exit: styles.modalExit,
                    }}
                >
                    <div
                        className={styles.modal}
                        onClick={(ev) => {
                            if (ev.currentTarget === ev.target) {
                                onClose();
                            }
                        }}
                    >
                        <div className={styles.modalMenu}>
                            {ModalMenu({ onClose })}
                        </div>
                    </div>
                </CSSTransition>
            ) : (
                <CSSTransition
                    in={isFocus}
                    timeout={{ enter: 0, exit: 300 }}
                    unmountOnExit
                    classNames={{
                        enter: styles.listEnter,
                        enterDone: styles.listEnterDone,
                        exit: styles.listExit,
                    }}
                >
                    <div className={`${styles.list} utair-global-list`}>
                        {Menu({ onClose })}
                    </div>
                </CSSTransition>
            )}
        </div>
    );
}

DropDown.Toggle = function Toggle({ children }) {
    return children;
};

DropDown.Menu = function Menu({ children }) {
    return children;
};

DropDown.ModalMenu = function ModalMenu({ children }) {
    return children;
};

DropDown.ModalMenuHeader = function ModalMenuHeader({
    className = "",
    children,
}) {
    return (
        <div className={`${styles.modalMenuHeader} ${className}`}>
            {children}
        </div>
    );
};

DropDown.ModalMenuContent = function ModalMenuContent({
    className = "",
    children,
}) {
    return (
        <div className={`${styles.modalMenuContent} ${className}`}>
            {children}
        </div>
    );
};

DropDown.ModalMenuFooter = function ModalMenuFooter({
    className = "",
    children,
}) {
    return (
        <div className={`${styles.modalMenuFooter} ${className}`}>
            {children}
        </div>
    );
};

export default DropDown;
