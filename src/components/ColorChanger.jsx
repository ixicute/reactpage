import { useEffect, useRef} from 'react';

function ColorChanger() {
    const colorInterval = useRef(null);
    const style = useRef(null);

    function handleClick() {
        if (style.current) {
            clearInterval(colorInterval.current);
            style.current.innerHTML = '';
            style.current = null;
        } else {
            style.current = document.createElement('style');
            document.head.appendChild(style.current);

            colorInterval.current = setInterval(() => {
                const randomColor = `rgba(${Math.floor(Math.random() * 256)}, 
                                      ${Math.floor(Math.random() * 256)}, 
                                      ${Math.floor(Math.random() * 256)}, 0.5)`;

                style.current.innerHTML = `.hero::before {
                                            background-color: ${randomColor};
                                            content: "";
                                            position: absolute;
                                            top: 10%;
                                            left: 0;
                                            width: 100%;
                                            height: 90%;
                                            z-index: 0;
                                            transition: background-color 1s ease-in-out;
                                        }`;
            }, 300);
        }
    }

    useEffect(() => {
        const element = document.getElementById('changeColor');
        element.addEventListener('click', handleClick);

        return () => {
            element.removeEventListener('click', handleClick);
            clearInterval(colorInterval.current);
            if (style.current) {
                document.head.removeChild(style.current);
            }
        };
    }, []);

    return null;
}

export default ColorChanger;