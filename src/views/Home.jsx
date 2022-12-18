import './Home.css'
import Header from '../components/Header'
import CollabCard from '../components/CollabRandomCard'


function Home () {

    // const [identify, setIdentify] = useContext(LoginContext);
    return (

        <div className='home'>

            <Header/>

            <div className='text-home'>
                <h1 className='typed-out text-center'>Bienvenue sur l'intranet</h1>
            </div>



            <h2 className='text-center'>La plateforme de l'entreprise qui vous permet de retrouver tous vos collaborateurs.</h2>

            <h3 className='text-center'>Avez-vous dit bonjour à :</h3>

            <CollabCard/>

        </div>

    )
}

export default Home