document.getElementById("resumeForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const resumeData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        address: { city: "Unknown", region: "Unknown", country: "Unknown" }
    };
    
    const response = await fetch("http://localhost:8000/submit-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(resumeData)
    });

    const result = await response.json();
    alert(`Resume generated! Download: ${result.pdf_url}`);
});
