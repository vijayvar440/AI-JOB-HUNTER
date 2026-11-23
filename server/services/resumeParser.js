
const extractSkills = (text) => {
    const skillList = [
        "JavaScript", "Java", "Python", "C++",
        "React", "Node.js", "Express.js",
        "MongoDB", "SQL", "MySQL",
        "HTML", "CSS", "Django",
        "REST APIs", "Git", "GitHub",
        "AWS", "Docker", "Redis",
        "TypeScript", "Next.js", "PostgreSQL"
    ];

    return skillList.filter(skill =>
        new RegExp(
            `\\b${skill.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`,
            "i"
        ).test(text)
    );
};

const extractEducation = (text) => {
    const lines = text.split("\n");

    return lines
        .filter(line =>
            /\b(B\.?Tech|B\.?E\.?|M\.?Tech|BCA|MCA|Diploma|Bachelor|Master|Degree|University|College|Higher Secondary|12th|10th)\b/i.test(line)
        )
        .map(line => line.trim())
        .filter(Boolean);
};

const extractExperience = (text) => {
    const lines = text.split("\n");

    return lines
        .filter(line =>
            /\b(Developer|Engineer|Intern|Experience|Worked|Company|Technologies|Pvt\.? Ltd\.?)\b/i.test(line)
        )
        .map(line => line.trim())
        .filter(Boolean);
};

const parseResume = (text) => {
    return {
        skills: extractSkills(text),
        education: extractEducation(text),
        experience: extractExperience(text)
    };
};

module.exports = { parseResume };
