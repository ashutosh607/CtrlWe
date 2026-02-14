const tennisData = [
    { 
        name: "Ace Academy Courts", 
        loc: "andheri", 
        price: "800", 
        rating: "4.7", 
        slots: ["07:00", "08:00", "10:00"], 
        booked: ["09:00"] 
    },
    { 
        name: "Grand Slam Turf", 
        loc: "vile parle", 
        price: "1000", 
        rating: "4.9", 
        slots: ["16:00", "17:00"], 
        booked: ["18:00", "19:00"] 
    }
];

function filterTennis() {
    const input = document.getElementById('locationInput').value.toLowerCase();
    const grid = document.getElementById('turfGrid');
    grid.innerHTML = "";

    const results = tennisData.filter(t => t.loc.includes(input));

    if (results.length > 0) {
        results.forEach(t => {
            let btns = "";
            t.slots.forEach(s => btns += `<button class="slot-btn" onclick="this.classList.toggle('selected')">${s}</button>`);
            t.booked.forEach(b => btns += `<button class="slot-btn booked" disabled>${b}</button>`);

            grid.innerHTML += `
                <div class="turf-card">
                    <div style="display:flex; justify-content:space-between;">
                        <h3>${t.name}</h3>
                        <div class="rating">★ ${t.rating}</div>
                    </div>
                    <p style="font-size:12px; color:#666;">📍 ${t.loc.toUpperCase()}</p>
                    <div class="price">₹${t.price} <span style="font-size:12px; font-weight:400;">/ hr</span></div>
                    
                    <div class="matchmaking-tag">
                        <input type="checkbox"> <small>Need a Partner? (Matchmaking)</small>
                    </div>

                    <p style="font-size:13px; font-weight:700; margin-bottom:10px;">Select Time Slots:</p>
                    <div class="slot-grid">${btns}</div>
                    
                    <button class="book-now-btn" onclick="confirmBooking('${t.name}')">Confirm & Book Now</button>
                </div>`;
        });
    } else {
        grid.innerHTML = "<p>No tennis courts found in that area!</p>";
    }
}

function confirmBooking(name) {
    alert("Tennis court at " + name + " booked successfully!");
}