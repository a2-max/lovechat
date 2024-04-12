import { useEffect } from 'react';
import Swal from 'sweetalert2';

const SweetAlert = ({ type, message }) => {
    useEffect(() => {
        if (type && message) {
            Swal.fire({
                icon: type,
                title: message,
                showConfirmButton: false,
                timer: 1500
            });
        }
    }, [type, message]);

    return null;
};

export default SweetAlert;
