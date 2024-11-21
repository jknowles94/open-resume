
function Skills() {

  const skills = ['Javascript', 'Typescript', 'React', 'NextJs', 'NodeJs', 'TDD', 'RESTful API', 'GraphQL', 'CSS/SASS', 'CI/CD', 'AWS', 'Vue', 'Stencil'];

  return (
    <div className="text-white mb-4">
      <h3 className="uppercase text-lg mb-4">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <div key={`skill_${i}`} className="border border-white p-2 text-sm">
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
