const liveMatches = [
    { sport: "Football", turf: "DJ Sanghvi Arena", time: "18:00 Today", slotsNeeded: 3, level: "Intermediate" },
    { sport: "Badminton", turf: "Vile Parle Gymkhana", time: "19:30 Today", slotsNeeded: 1, level: "Advanced" },
    { sport: "Tennis", turf: "Ace Academy", time: "07:00 Tomorrow", slotsNeeded: 2, level: "Beginner" },
    { sport: "Pickleball", turf: "Dink Central", time: "17:00 Today", slotsNeeded: 4, level: "Any" }
];

function loadMatches() {
    const grid = document.getElementById('matchGrid');
    grid.innerHTML = "";

    liveMatches.forEach(match => {
        grid.innerHTML += `
            <div class="match-card">
                <div class="match-header">
                    <span class="sport-tag">${match.sport}</span>
                    <span class="slots-left">${match.slotsNeeded} Players Needed</span>
                </div>

                <h3>${match.turf}</h3>

                <p style="font-size: 13px; color: #666; margin: 10px 0;">
                    🕒 ${match.time} <br>
                    📊 Level: ${match.level}
                </p>

                <button class="join-btn" onclick="requestJoin('${match.sport}')">
                    Request to Join
                </button>
            </div>
        `;
    });
}

function requestJoin(sport) {
    alert(`Your request to join the ${sport} match has been sent to the team captain!`);
}

loadMatches();

