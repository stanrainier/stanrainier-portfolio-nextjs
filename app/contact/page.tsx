import Contact from "@/components/contact";
import { title } from "@/components/primitives";
export const metadata = {
    title: "Contact",
  };
export default function ContactPage() {

    return(
        <div className="flex flex-col items-center w-full px-4 md:px-12 py-12"> 

            <Contact/>
            <p className="text-md text-bold text-justify my-4 mb-10 max-w-2xl lg:text-xl lg:text-center">   
            Whether you have a project in mind, want to collaborate, or just want to say hi — I’d love to hear from you.
            I&apos;m always open to new opportunities, freelance work, or just chatting about tech and development.
            Feel free to reach out using the form below or connect with me through my social media links. Let’s build something awesome together!
            </p>
        </div>
    )
}