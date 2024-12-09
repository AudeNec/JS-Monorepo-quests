import { useEffect, useState } from "react";

import "./Programs.css";

type ProgramType = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  year: number;
};

function Programs() {
  const [programs, setPrograms] = useState<ProgramType[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:3310/api/programs")
      .then((res) => res.json())
      .then((data) => setPrograms(data));
  });
  return (
    <>
      {programs ? (
        programs.map((program: ProgramType) => (
          <article key={program.id}>
            <h2>{program.title}</h2>
            <img src={program.poster} alt="poster du film" />
            <p>{program.synopsis}</p>
          </article>
        ))
      ) : (
        <></>
      )}
    </>
  );
}

export default Programs;
