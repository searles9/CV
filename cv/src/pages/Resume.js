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
      <SectionTitle>Certifications</SectionTitle>
      <SectionTitle>Education</SectionTitle>    
    </div>
  );
}
