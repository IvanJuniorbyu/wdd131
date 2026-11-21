let aCourse = {
  code: "WDD131",
  title: "Fundamentos da Web Dinâmica",
  credits: 2,
  sections: [
    {
      section: "001",
      enrolled: 95,
      instructor: "Roberto Diaz Rodriguez",
    },
    {
      section: "002",
      enrolled: 80,
      instructor: "Sarah Gobble",
    }
  ]
};

function setCourseInformation(course) {
  const elementoNomeCurso = document.querySelector("#courseName");
  elementoNomeCurso.innerHTML = `${course.code} - ${course.title}`;
}

function renderSections(sections) {
  const tbody = document.querySelector("#sections tbody");
  const html = sections.map(
    (sec) => `<tr>
      <td>${sec.section}</td>
      <td>${sec.enrolled}</td>
      <td>${sec.instructor}</td>
    </tr>`
  );
  tbody.innerHTML = html.join("");
}
// ⚠️ ESSAS DUAS LINHAS SÃO ESSENCIAIS PARA EXECUTAR AS FUNÇÕES:
setCourseInformation(aCourse);
renderSections(aCourse.sections);