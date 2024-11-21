import { Location, Email, Phone, Linkedin, Github } from "../icons";

function Contact() {
  return (
    <div className="text-white mb-4">
      <h3 className="uppercase text-lg mb-4">Contact</h3>
      <div className="gap-4 flex flex-col">
        <div className="flex items-center gap-2">
          <Location />
          <span className="text-sm">Tunbridge Wells, Kent</span>
        </div>
        <a className="flex items-center gap-2" href="mailto:jake.knowles94@outlook.com">
          <Email />
          <span className="text-sm">jake.knowles94@outlook.com</span>
        </a>
        <a className="flex items-center gap-2" href="tel:+447947108062">
          <Phone />
          <span className="text-sm">+447947108062</span>
        </a>
        <a className="flex items-center gap-2" href="https://www.linkedin.com/in/jake-knowles-87381057/" target="_blank">
          <Linkedin />
          <span className="text-sm">jake-knowles-87381057</span>
        </a>
        <a className="flex items-center gap-2" href="https://github.com/jknowles94" target="_blank">
          <Github />
          <span className="text-sm">jknowles94</span>
        </a>
      </div>
    </div>
  )
}

export default Contact
