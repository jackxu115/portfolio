import "../style/Projects.scss"


export const Projects = () => {

    const projectList = [
        {
            projectName: 'lululemon-clone',
            url: 'https://gitlab.com/f4513/class61/c61-lulu-ecommerce/-/tree/offerget-7.0.0',
            skills: ['react', 'scss', 'javaScript', 'redux', 'git', 'RESTful API', 'redis', 'express', 'TypeORM', 'typeScript', 'NodeJs']
        },
        {
            projectName: 'beeMusicStore',
            url: 'https://jackxu115.github.io/reactredux-beemusic-project-base/',
            skills: ['react', 'redux', 'scss', 'RESTful API', 'javaScript']
        },
        {
            projectName: 'shopping-Cart',
            url: 'https://jackxu115.github.io/shopping-cart/',
            skills: ['react', 'redux', 'scss', 'javaScript']
        },
        {
            projectName: 'city-view',
            url: 'https://jackxu115.github.io/cityView-Router/',
            skills: ['react', 'javaScript', 'scss', 'RESTful API']
        },
        {
            projectName: 'calculator',
            url: 'https://jackxu115.github.io/calculator/',
            skills: ['html', 'css', 'javaScript']
        },
        {
            projectName: 'etch-a-sketch',
            url: 'https://jackxu115.github.io/etch-a-sketch/',
            skills: ['html', 'css', 'javaScript']
        },
        {
            projectName: 'carousel',
            url: 'https://jackxu115.github.io/carousel-practice/',
            skills: ['html', 'javaScript', 'css']
        },
        {
            projectName: 'MemoryCard',
            url: 'https://jackxu115.github.io/MemoryCard/',
            skills: ['react', 'javaScript', 'scss']
        },
        {
            projectName: 'cv-project',
            url: 'https://jackxu115.github.io/cv-project/',
            skills: ['react', 'javaScript', 'css']
        },
        {
            projectName: 'weather-app',
            url: 'https://jackxu115.github.io/weather-app/',
            skills: ['html', 'javaScript', 'css','RESTful API']
        },
        {
            projectName: 'todoList',
            url: 'https://jackxu115.github.io/todoList/',
            skills: ['html', 'javaScript', 'css']
        },
        {
            projectName: 'restaurant',
            url: 'https://jackxu115.github.io/restaurant/',
            skills: ['html', 'javaScript', 'css']
        },
        {
            projectName: 'TicTacToe',
            url: 'https://jackxu115.github.io/TicTacToe/',
            skills: ['html', 'javaScript', 'css']
        },

        {
            projectName: 'Admin-Dashboard',
            url: 'https://jackxu115.github.io/Admin-Dashboard/',
            skills: ['html', 'scss']
        },
        {
            projectName: 'library',
            url: 'https://jackxu115.github.io/library/',
            skills: ['html', 'scss','javaScript']
        },
        {
            projectName: 'signUpForm',
            url: 'https://jackxu115.github.io/signUpForm/',
            skills: ['html', 'javaScript','css']
        },
    ]



    return (
        <div className="Projects">
            <section id="projects" className="Projects_Section">
                <div className="Projects_Section_List">
                    <h3>Projects</h3>
                </div>
            </section>
        </div>
    )
}