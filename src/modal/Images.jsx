import { useRef, useState } from 'react';
import { forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const ImageModal = forwardRef(function ImageModal({ topic }, ref) {
    const modal = useRef(null);
    const [videoUrl, setVideoUrl] = useState('null');

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
            <dialog ref={modal}>Hello video Modal</dialog>
        </div>,
        document.getElementById('modal')
    );
});

export default ImageModal;
