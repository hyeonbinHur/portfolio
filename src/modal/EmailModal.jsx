import { useRef } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';
import emailjs from '@emailjs/browser';

const EmailModal = forwardRef(function EmailModal(props, ref) {
    const modal = useRef(null);
    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                {
                    publicKey: import.meta.env.VITE_PUBLIC_KEY,
                }
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    useImperativeHandle(ref, () => {
        return {
            open: () => {
                modal.current.showModal();
            },
            close: () => {
                modal.current.close();
            },
        };
    });
    return createPortal(
        <div>
            <dialog ref={modal} onSubmit={sendEmail} className="modal--email">
                <AiOutlineClose
                    onClick={() => modal.current.close()}
                    className="modal--close__image"
                />

                <form ref={form} className="email--form">
                    <label
                        className="email--label"
                        htmlFor="email-company-name"
                    >
                        Company Name
                    </label>

                    <input
                        type="text"
                        id="email-company-name"
                        name="email-company-name"
                        className="email--input"
                        required
                    />

                    <label className="email--label" htmlFor="email-full-name">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="email-full-name"
                        name="email-full-name"
                        className="email--input"
                        required
                    />

                    <label className="email--label" htmlFor="email-email">
                        Email
                    </label>
                    <input
                        className="email--input"
                        type="text"
                        id="email-email"
                        name="email-email"
                        required
                    />

                    <label className="email--label" htmlFor="email-subject">
                        Subject
                    </label>
                    <input
                        className="email--input"
                        type="text"
                        id="email-email"
                        name="email-subject"
                        required
                    />

                    <label className="email--label" htmlFor="email-message">
                        Mesasge
                    </label>
                    <textarea
                        type="text"
                        id="email-message"
                        name="email-message"
                        className="email--input email--message"
                        required
                    />

                    <input type="submit" value="Send" className="email--btn" />
                </form>
            </dialog>
        </div>,
        document.getElementById('modal')
    );
});

export default EmailModal;
