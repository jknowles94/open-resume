
function Skills() {

  const skills = ['Javascript', 'Typescript', 'React', 'Vue','NextJs', 'NodeJs', 'TDD', 'REST API', 'GraphQL', 'CSS/SASS', 'CI/CD', 'AWS', 'Stencil'];

  return (
    <div className="text-white mb-4">
      <h3 className="uppercase mb-4">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <div key={`skill_${i}`} className="border border-white p-2 text-xs">
            {skill}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
