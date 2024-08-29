import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
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

    return (
        <>
            <h3 className="heading--tertiary">Get in touch</h3>
            <div className="contact--container">
                <div className="contact--email">
                    <div className="contact--icon__container">
                        <AiOutlineMail className="contact--icon" />
                    </div>
                    <div className="contact--email__container">
                        <div className="contact--email__address">
                            uncle.hyeonb@gmail.com
                        </div>
                        <div className="contact--email__address">
                            s3740878@rmit.edu.vn
                        </div>
                    </div>
                </div>

                <div className="contact--sns">
                    <div className="contact--icon__container">
                        <AiOutlineLinkedin className="contact--icon__link" />
                    </div>
                    <a
                        href="https://www.linkedin.com/in/hyeonbin-hur-755a87319/"
                        className="contact--link"
                    >
                        Linkedin Profile
                    </a>
                </div>
                <div className="contact--sns">
                    <div className="contact--icon__container">
                        <BsGithub className="contact--icon__github" />
                    </div>
                    <a
                        href="https://github.com/hyeonbinHur"
                        className="contact--link"
                    >
                        GitHub Profile
                    </a>
                </div>
                <form ref={form} onSubmit={sendEmail} className="email--form">
                    <div className="email--names">
                        <div className="form--group">
                            <label
                                className="email--label"
                                htmlFor="email-full-name"
                            >
                                Full Name*
                            </label>
                            <input
                                type="text"
                                id="email-full-name"
                                name="email-full-name"
                                className="email--input"
                                required
                            />
                        </div>

                        <div className="form--group">
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
                            />
                        </div>
                    </div>
                    <div className="form--group form--email">
                        <label className="email--label" htmlFor="email-email">
                            Email*
                        </label>
                        <input
                            className="email--input"
                            type="email"
                            id="email-email"
                            name="email-email"
                            required
                        />
                    </div>
                    <div className="form--group form--subject">
                        <label className="email--label" htmlFor="email-subject">
                            Subject
                        </label>
                        <input
                            className="email--input"
                            type="text"
                            id="email-email"
                            name="email-subject"
                        />
                    </div>
                    <div className="form--group form--message">
                        <label className="email--label" htmlFor="email-message">
                            Mesasge*
                        </label>
                        <textarea
                            type="text"
                            id="email-message"
                            name="email-message"
                            className="email--input email--message"
                            required
                        />
                    </div>
                    <div className="form--group form--send">
                        <input
                            type="submit"
                            value="Send"
                            className="email--btn"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}
