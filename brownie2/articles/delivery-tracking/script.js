function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Simple auth check (for demo; use Firebase Auth in production)
    if (email === "delivery@example.com" && password === "password") {
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid credentials");
    }
  }
  