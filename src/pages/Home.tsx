import Hero from "../components/Hero"
import Skills from "../components/Skills"

export const Home: React.FC = () => {
    return (
        <div className="home-page">
            <Hero />
            <Skills />
        </div>
    )
}