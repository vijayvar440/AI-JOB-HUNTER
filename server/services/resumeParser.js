
const extractSkills = (text) => {
    const skillList = [
        "JavaScript", "Java", "Python", "C++",
        "React", "Node.js", "Express.js",
        "MongoDB", "SQL", "MySQL",
        "HTML", "CSS", "Django",
        "REST APIs", "Git", "GitHub",
        "AWS", "Docker", "Redis",
        "TypeScript", "Next.js", "PostgreSQL",
        "Socket.io", "JWT", "Capacitor", "Vite"
    ];

    return skillList.filter(skill => {
        const escaped = skill.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(`\\b${escaped}\\b`, "i");
        return regex.test(text);
    });
};

const extractEducation = (text) => {
    const lines = text.split(/\r?\n/);

    return lines
        .map(line => line.trim())
        .filter(line => {
            return /\b(B\.?Tech|B\.?E\.?|M\.?Tech|BCA|MCA|Diploma|Bachelor|Master|Degree|University|College|Higher Secondary|12th|10th)\b/i.test(line);
        })
        .filter(line => line.length < 200)
        .filter(line => !/developer|designed and deployed|seeking|full-stack/i.test(line));
};

const extractExperience = (text) => {
    const lines = text.split(/\r?\n/);

    return lines
        .map(line => line.trim())
        .filter(line => {
            return /\b(Developer|Engineer|Intern|Internship|Experience|Pvt\.?\s*Ltd\.?|Technologies)\b/i.test(line);
        })
        .filter(line => line.length < 200)
        .filter(line => !/seeking|designed and deployed|student and full-stack/i.test(line));
};

const parseResume = (text) => {
    return {
        skills: extractSkills(text),
        education: extractEducation(text),
        experience: extractExperience(text)
    };
};

module.exports = { parseResume };
