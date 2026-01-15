import { faDiscord, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactPage = () => {
    return (
        <div className="flex flex-col items-center h-screen">
            <h1 className="font-bold text-3xl my-4">Kontak Saya</h1>
            <div className="mx-auto p-2 rounded-md border-spacing-5 border-2 border-gray-300">
                <ul>
                    <li><a target="_blank" href="https://github.com/Febrian1202" className="hover:text-cyan-300 transition-colors duration-200"><FontAwesomeIcon icon={faGithub} className="w-4 h-4 mx-2"></FontAwesomeIcon>Github</a></li>
                    <li><a target="_blank" href="https://www.instagram.com/r1daz_/" className="hover:text-red-500 transition-colors duration-200"><FontAwesomeIcon icon={faInstagram} className="w-4 h-4 mx-2"></FontAwesomeIcon>Instagram</a></li>
                    <li><a target="_blank" href="https://www.discordapp.com/users/480351465425338368" className="hover:text-blue-500 transition-colors duration-200"><FontAwesomeIcon icon={faDiscord} className="w-4 h-4 mx-2"></FontAwesomeIcon>Discord Profile</a></li>
                </ul>
            </div>
        </div>
    )
}

export default ContactPage
