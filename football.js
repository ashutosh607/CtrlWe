const turfs = [
    { 
        name: "DJ Sanghvi Arena", 
        loc: "vile parle", 
        price: "1200", 
        rating: "4.8", 
        slots: ["17:00", "18:00", "21:00"], 
        booked: ["19:00", "20:00"] 
    },
    { 
        name: "Mumbai Kickers", 
        loc: "andheri", 
        price: "1500", 
        rating: "4.5", 
        slots: ["20:00", "22:00"], 
        booked: ["18:00", "21:00"] 
    }
];

function filterTurfs() {
    const input = document.getElementById('locationInput').value.toLowerCase();
    const grid = document.getElementById('turfGrid');
    grid.innerHTML = "";

    const results = turfs.filter(t => t.loc.includes(input));

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
                    
                    <p style="font-size:13px; font-weight:700; margin-bottom:10px;">Select Time Slots:</p>
                    <div class="slot-grid">${btns}</div>
                    
                    <button class="book-now-btn" onclick="handleBooking('${t.name}')">Confirm & Book Now</button>
                </div>`;
        });
    } else {
        grid.innerHTML = "<p>No turfs found in that area. Try 'Vile Parle'.</p>";
    }
}

function handleBooking(turfName) {
    const selected = document.querySelectorAll('.slot-btn.selected').length;
    if (selected > 0) {
        alert(`Success! Request for ${selected} slots at ${turfName} has been sent to the provider.`);
    } else {
        alert("Please select at least one time slot first.");
    }
}