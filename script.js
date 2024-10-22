const nameElement = document.getElementById('dynamicName');
const skillsElement = document.getElementById('dynamicSkills');

const dynamicName = "Your Name";
const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

function typeWriter(element, text, delay = 100) {
    let index = 0;
    function typing() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typing, delay);
        }
    }
    typing();
}

function displaySkills() {
    let skillsText = skills.join(', ');
    skillsElement.innerHTML = '';
    typeWriter(skillsElement, skillsText);
}

typeWriter(nameElement, dynamicName);
displaySkills();
