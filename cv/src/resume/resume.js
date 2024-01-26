export const resume = {
  basics: {
    name: "Donovan Searles",
    label: "Full Stack Cloud Developer",
    email: "donovansearles@gmail.com",
    dob: "2000-07-20",
    phone: {
      "country-code": "+1",
      "area-code": "706",
      "local-number": "510-8996",
    },
    location: {
      city: "Atlanta",
      state: "GA",
      country: "United States",
      "country-code": "US",
    },
    summary:
      "Highly ambitious and self-motivated Software Engineer with 5+ years of experience in the IT field, including comprehensive knowledge and hands-on experience with AWS and Azure, programming / software development, network administration and technical support.",
  },
  profiles: [
    {
      name: "GitHub",
      link: "https://github.com/searles9",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/donovansearles/",
    },
    {
      name: "Blog",
      link: "https://blog.dsearles.com/",
    },
  ],
  skills: [
    {
      name: "AWS"
    },
    {
      name: "Azure"
    },
    {
      name: "HTML"
    },
    {
      name: "CSS"
    },
    {
      name: "JavaScript"
    },
    {
      name: "Node.js"
    },
    {
      name: "Python"
    },
    {
      name: "React.js"
    },
    {
      name: "React Native"
    },
    {
      name: "Redux & Redux Toolkit"
    },
    {
      name: "React Router"
    },
    {
      name: "Terraform"
    },
    {
      name: "Bash"
    },
    {
      name: "Powershell"
    },

  ],
  // what happens if I have multible jobs that I am working at the same time currently ? 
  work: [
    {
      "relevantExperience": true,
      "company": {
        "name": "Cox Automotive",
        "url": "https://www.coxautoinc.com/"
      },
      "title": "Software Engineer I",
      "employmentType": "Full-time",
      "location": {
        "type": "Remote",
        "city": "Atlanta",
        "region": "Georgia",
        "country": "United States"
      },
      "tenure": {
        "isCurrentPosition": true,
        "startMonth": "03",
        "startYear": "2022",
      },
      "summary": "Working on a small team of software engineers to deploy an Azure Landing zone",
      "highlights": [
        "Automated the deployment of Azure subscriptions within the org",
        "Designed, archictected and built solutions that account for for scale, security governance, networking, and identity management.",
        "Used Terraform (infrastructure as code) to deploy infrstructure in AWS and Azure"
      ]
    },
    {
      "relevantExperience": true,
      "company": {
        "name": "Cox Automotive",
        "url": "https://www.coxautoinc.com/"
      },
      "title": "AWS Support Engineer",
      "employmentType": "Contract",
      "location": {
        "type": "Remote",
        "city": "Atlanta",
        "region": "Georgia",
        "country": "United States"
      },
      "tenure": {
        "startMonth": "03",
        "startYear": "2022",
        "endMonth": "03",
        "endYear": "2022"
      },
      "summary": "Completed AWS related support tickets via ServiceNow to assist the development teams using AWS",
      "highlights": [
        "Used Terraform (infrastructure as code) to deploy AWS resources",
        "Ticket examples: create/rotate/delete iam access keys, create/delete aws accounts, setup vpc peering, deploy vpcs, deploy client vpns",
        "Created tooling and scripts to automate repetative tasks"
      ]
    }
  ],
  education: [],
  certificates: []
};

// import { resume } from './resume';
