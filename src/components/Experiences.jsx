
function Experiences() {

  const experiences = [
    {
      company: 'AND Digital',
      role: 'Product Developer',
      time: 'Since Sept 2021',
      summary: 'As a Product Developer at AND Digital I have experienced multiple projects across multiple clients all with different needs to help them develop and deliver digital products and platforms.',
      detailed: [
        'Front End Solution Architect @ British Airways: Platform champion for over 20 applications within the BA space. Served as the central support point for team queries and issues, including assisting with application upgrades and migrations to AWS and Angular. Additionally, contributed to front-end architecture roadmaps and CI/CD strategies.',
        'Full Stack JS Developer @ Oxford Nanopore Technologies: Contributed to the development of EPI2ME Portal, a full-stack JavaScript application using Electron, Node.js, and React. The app leveraged the operating system to execute large workflows from a public GitHub repository against local data. I implemented tRPC to optimize communication between the client and server.',
        'Full Stack JS Developer @ AND Business Platform: AND built their own platform for managing holidays, clients, expenses, etc. It is a full-stack JavaScript app using React and Node.js with TypeScript. I helped maintain Node.js services in a microservice architecture that uses Serverless, DynamoDB, SNS, and Redshift to build out its API endpoints. Simultaneously, I built new and improved UI experiences on the client side to offer a seamless interface for ANDis.'
      ]
    },
    {
      company: 'Amigo Partnership',
      role: 'Lead Front End Engineer',
      time: 'Mar 2020 - Sep 2021',
      summary: 'I developed a variety of web applications for multiple clients using React (NextJS) and Angular, integrating headless CMS APIs like Contentful, Sitecore, and Sanity. As our engineering team expanded, I implemented DevOps practices across all projects to reduce bugs and enhance code quality. These practices included testing with Jest, Enzyme, and Cypress, as well as CI strategies and release management across environments. Additionally, I collaborated with senior leadership to improve our client delivery process while exploring innovative work methodologies.',
      detailed: []
    },
    {
      company: 'IPUSHPULL',
      role: 'Front End Engineer',
      time: 'Apr 2019 - Mar 2020',
      summary: 'As part of a small engineering team, I helped build a platform that gives clients access to live data across multiple applications using the Ipushpull platform. I led the migration of our main webapp from AngularJS to Vue, creating a reusable component architecture for integrations with Slack, Symphony, and Microsoft Teams. Additionally, I implemented a Test-Driven Development (TDD) approach using Jest and Cypress to enhance our DevOps practices.',
      detailed: []
    },
    {
      company: 'Amigo Partnership',
      role: 'Front End Engineer',
      time: 'Aug 2015 - Mar 2019',
      summary: 'As part of a small engineering team at a digital agency, I developed and maintained a bespoke CMS using React and an API using GraphQL and Ruby on Rails. I leveraged this CMS to create websites and applications for various clients, including Rolls-Royce and O2, using React and Vue.',
      detailed: []
    },
    {
      company: 'McCormack & Morrison',
      role: 'Junior Front End Engineer',
      time: 'Oct 2013 - Aug 2015',
      summary: 'I joined a digital agency to create responsive emails within Salesforce for clients like Royal Caribbean and Virgin. After 6–8 months, I began helping the team maintain and build WordPress websites for clients. Throughout this experience, I learned about new technologies and patterns in CSS and JavaScript.',
      detailed: []
    }
  ];

  return (
    <div className="p-8">
      {experiences.map((exp, i) => (
        <div className="mb-8" key={`exp_${i}`}>
          <h3>{exp.company}</h3>
          <p><strong>{exp.role}</strong></p>
          <p className="mb-4 text-xs">{exp.time}</p>
          <p className="text-xs mb-2">{exp.summary}</p>
          {exp.detailed.length > 0 && (
            <ul className="text-xs list-disc list-outside ml-4">
              {exp.detailed.map((det, i) => (
                <li key={`detail_${i}`} className="mb-2">{det}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

export default Experiences
