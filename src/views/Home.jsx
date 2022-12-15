import './Home.css'
import Header from '../components/Header'
import CollabCard from '../components/CollabCard'


function Home () {
    return (

        <div className='home'>

            <Header/>

            <h1>Bienvenue sur l'intranet</h1>

            <p>La plateforme de l'entreprise qui vous permet de retrouver tous vos collaborateurs.</p>

            <h2>Avez-vous dit bonjour à :</h2>

            <CollabCard/>

        </div>

    )
}

export default Home