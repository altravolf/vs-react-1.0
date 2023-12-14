import React, { useEffect } from 'react';

function Scripts() {
    useEffect(() => {
        const loadScripts = async () => {
            // EmailJS library
            const emailJsScript = document.createElement('script');
            emailJsScript.src = 'https://cdn.emailjs.com/dist/email.min.js';
            document.body.appendChild(emailJsScript);

            // Initialize EmailJS
            emailJsScript.onload = () => {
                window.emailjs.init('ybbTPRf18mbfO_Hjx'); // Replace with your EmailJS User ID
            };

            // Other Vendor JS Files
            const scripts = [
                'assets/vendor/aos/aos.js',
                'assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
                'assets/vendor/php-email-form/validate.js',
                'assets/vendor/purecounter/purecounter.js',
                'assets/vendor/swiper/swiper-bundle.min.js',
                'assets/js/main.js',
                './assets/include/myJs.js'
            ];

            scripts.forEach(src => {
                const script = document.createElement('script');
                script.src = src;
                document.body.appendChild(script);
            });
        };

        loadScripts();

        // Clean up function
        return () => {
            // Remove scripts if necessary
        };
    }, []);

    return null;
}

export default Scripts;
