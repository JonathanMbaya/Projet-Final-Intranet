import './Home.css'
import Header from '../components/Header'
import CollabCard from '../components/CollabCard'


function Home () {
    return (

        <div className='home'>

            <Header/>

            <div className='text-home'>
                <h1 className='typed-out'>Bienvenue sur l'intranet</h1>
            </div>



            <p>La plateforme de l'entreprise qui vous permet de retrouver tous vos collaborateurs.</p>

            <h2>Avez-vous dit bonjour à :</h2>

            <CollabCard/>

        </div>

    )
}

export default Home