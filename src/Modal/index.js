import ReactDOM from 'react-dom';
import './Modal.css';

export function Modal({children}) {
    return ReactDOM.createPortal(
        <div className="modal-background">
            {children}
        </div>,
        document.getElementById('modal')
    );
}
