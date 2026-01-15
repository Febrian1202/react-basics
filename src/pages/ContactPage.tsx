import { faDiscord, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const ContactPage = () => {
    return (
        <div className="flex flex-col items-center h-max">
            <h1 className="font-bold text-6xl my-6">Kontak Saya</h1>
            <div className="mx-auto text-2xl p-3 rounded-md border-spacing-5 border-2 border-gray-300">
                <ul>
                    <li className="mb-2 justify-center items-center">
                        <a target="_blank" href="https://github.com/Febrian1202" className="flex items-center gap-2 hover:text-cyan-300 transition-colors duration-200">
                            <FontAwesomeIcon icon={faGithub} className="h-7 "></FontAwesomeIcon>Github
                        </a>
                    </li>
                    <li className="mb-2 justify-center items-center">
                        <a target="_blank" href="https://www.instagram.com/r1daz_/" className="flex items-center gap-2 hover:text-red-500 transition-colors duration-200">
                            <FontAwesomeIcon icon={faInstagram} className="h-7 "></FontAwesomeIcon>Instagram
                        </a>
                    </li>
                    <li className="mb-2 justify-center items-center">
                        <a target="_blank" href="https://www.discordapp.com/users/480351465425338368" className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-200">
                            <FontAwesomeIcon icon={faDiscord} className="h-7 "></FontAwesomeIcon>Discord Profile
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ContactPage
