
import { db, ref, push } from "./firebase.js";

document.getElementById("clientForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("service").value;

  if (name && service) {
    push(ref(db, "clients"), {
      name,
      service,
      timestamp: Date.now()
    });
    alert("تم التسجيل بنجاح");
    this.reset();
  }
});
