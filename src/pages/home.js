import Projects from "../components/Projects"

const Home = () => {
    return (
        <main>
            <section className='profile'>
                <div className='profile-container'>
                    <div className='profile-title'>
                        <p>Art director &</p>
                        <p>graphic designer</p>
                        <p>based in Dublin</p>
                    </div>
                    <address className='profile-contact'>
                        <a href='mailto:clovis.rosa@outlook.com'>
                            ︎clovis.rosa@outlook.com
                        </a>
                        <a href='https://github.com/clovis-rosa'>︎behance</a>
                        <p>︎+123 4567890</p>
                    </address>
                </div>
            </section>

            <Projects />
        </main>
    )
}

export default Home
