
// const useMousePosition = () => {
//     const [
//         mousePosition,
//         setMousePosition
//     ] = useState({x: null, y: null});
//
//     useEffect(() => {
//
//         const updateMousePosition = ev => {
//             setMousePosition({x: ev.clientX, y: ev.clientY});
//             let image = document.createElement('div')
//             image.classList.add('trail')
//             image.classList.add('trail')
//             image.classList.add('trail')
//             image.classList.add('trail')
//             let size = 10;
//             image.style.transition = '2s ease';
//             image.style.position = 'fixed';
//
//             image.style.top = ev.clientY + 'px';
//             image.style.left = ev.clientX + 'px';
//             image.style.backgroundColor = `rgba(255, 255, 255, 1)`
//             image.style.borderRadius = '50%'
//             image.style.filter = "blur(50%)"
//
//             image.style.width = size + 'px';
//             image.style.height = size + 'px';
//             document.querySelector('.Home').appendChild(image);
//             window.setTimeout(() => {
//                 image.style.opacity = 0;
//                 image.style.filter = 'blur(6px)';
//             }, 500);
//             window.setTimeout(() => document.querySelector('.Home').removeChild(image), 500)
//         };
//
//         window.addEventListener('mousemove', updateMousePosition);
//
//         return () => {
//             window.removeEventListener('mousemove', updateMousePosition);
//         };
//     }, []);
//
//     return mousePosition;
// };
//
// const mousePosition = useMousePosition()