const builders = ["Kearin", "Ayo", "Chris", "Andrew", "Jennifer", "Mehdi", "Josh", "Jacob"];
const coders = ["William Z", "Yousef", "Jonan", "Noah", "Aris", "Justin", "Niko", "Artyom"];
const innovators = ["Christiano", "Sheryl", "Angad", "Heisenberg", "Isabel", "Clark", "Marco", "Niamh"];

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function generateTeams() {
    const shuffledBuilders = shuffle([...builders]);
    const shuffledCoders = shuffle([...coders]);
    const shuffledInnovators = shuffle([...innovators]);

    const teamsContainer = document.getElementById("teamsContainer");
    teamsContainer.innerHTML = "";

    for (let i = 0; i < 4; i++) {
        const team = document.createElement("div");
        team.className = "team";
        team.innerHTML = `<h2>Team ${i + 1}</h2>
                          <p><strong>Builders:</strong> ${shuffledBuilders.slice(i*2, i*2+2).join(", ")}</p>
                          <p><strong>Coders:</strong> ${shuffledCoders.slice(i*2, i*2+2).join(", ")}</p>
                          <p><strong>Innovators:</strong> ${shuffledInnovators.slice(i*2, i*2+2).join(", ")}</p>`;
        teamsContainer.appendChild(team);
    }
}

document.getElementById("generateTeams").addEventListener("click", generateTeams);
