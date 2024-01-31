import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import PageTitle from "../components/PageTitle/PageTitle";
import SectionTitle from "../components/SectionTitle/SectionTitle";
import Skills from "../components/Skills/Skills";

export default function Resume() {
  return (
    <div>
      <PageTitle title="Resume"/>
      <SectionTitle topMargin={false}>Skills</SectionTitle>
      <Skills />
      <SectionTitle>Experience</SectionTitle>
      <Experience />
      <SectionTitle>Certifications</SectionTitle>
      <SectionTitle>Education</SectionTitle>
      <Education /> 
    </div>
  );
}
