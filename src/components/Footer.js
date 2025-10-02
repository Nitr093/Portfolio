import Link from "next/link"
import "@/styles/estilo.css";

const Footer = (props) => {
    return (
        <>
            <footer>
                {/* <a
                    href="/"
                    download
                    className="btn btn-primary mt-2"
                    style={{
                        paddingTop: '0.25rem',
                        paddingBottom: '0.25rem',
                        paddingLeft: '0.5rem',
                        paddingRight: '0.5rem',
                        fontSize: '0.9rem',
                    }}
                >
                    <i className="fa-solid fa-download"></i> Download resume
                </a> */}
                <p>Diseñado por Agustin Milani - &copy;2025</p>
            </footer>
        </>
    )
}



export default Footer;