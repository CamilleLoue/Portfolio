function ProjectCaseStudy(props) {
  return (
    <div className="container">
      <h1 className="text-gray-300 text-xl">{props.projectTitle}</h1>
      <div className="text-gray-400 text-base">
        <p>
          <strong>Client:</strong> {props.clientName}
        </p>

        <p>
          <strong>Project Overview:</strong> {props.projectOverview}
        </p>
        <p>
          <strong>Tasks:</strong>
          <ul>
            {props.tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </p>
        <p>
          <strong>Technologies:</strong> {props.technologies}
        </p>
        <p>
          <strong>Results:</strong> {props.results}
        </p>
        <p className="mb-4">
          <strong>Skills:</strong>
        </p>
        <ul className="list-disc ml-6">
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <p>
          <strong>Key Learnings:</strong> {props.keyLearnings}
        </p>
      </div>
      <style jsx>{`
        .container p {
          margin-bottom: 20px;
        }
      `}</style>
    </div>
  );
}

export default ProjectCaseStudy;
