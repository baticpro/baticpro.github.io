/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Modal } from "utair-ui-kit";

import Account from "./Account";

export default function LoginLink() {
    const [isModalOpen, setModalOpen] = useState();
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div>
            <a onClick={() => setModalOpen(true)}>Войти</a>
            {isModalOpen && (
                <Modal
                    disableOverlayClick
                    isLoading={isLoading}
                    size="small"
                    onClose={() => setModalOpen(false)}
                >
                    <Account setIsLoading={setIsLoading} />
                </Modal>
            )}
        </div>
    );
}
