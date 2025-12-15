let lastTap = 0;
let intervals = [];

function detectBPM() {
    const now = Date.now();

    if (lastTap !== 0) {
        let diff = now - lastTap; // ms since last tap
        let bpm = 60000 / diff;   // convert ms interval → beats per minute

        intervals.push(bpm);

        // Keep only the last 5 taps for a smoother average
        if (intervals.length > 5) {
            intervals.shift();
        }

        // Calculate average BPM
        let avgBPM = Math.round(intervals.reduce((a, b) => a + b, 0) / intervals.length);

        document.getElementById("bpmDisplay").textContent = avgBPM;
    }

    lastTap = now;
}

