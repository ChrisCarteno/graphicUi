import Link from "next/link"


export default function page2(){
    return(
        <div>
            <h1>This is Page 2</h1>
            <h2>
                Once this page finishes loading this will show up
            </h2>
            <p>
                this is a paragraph within page two,
                the purpose of this project is to showcase
                how to use css , html, and javascript in order
                to show how a responsive website handles
                loading screens when web pages take a long time to
                load.
            </p>
            <Link href="/" passHref>
                <button> Go to home page</button>
            </Link>
        </div>
    )
}
