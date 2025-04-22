
import { db, ref, push } from "./firebase.js";

document.getElementById("submit").onclick = () => {
  const name = document.getElementById("name").value.trim();
  const service = document.getElementById("service").value;

  if (name === "") {
    alert("يرجى إدخال اسم العميل.");
    return;
  }

  push(ref(db, "clients"), {
    name,
    service,
    timestamp: Date.now()
  }).then(() => {
    alert("تم تسجيلك بنجاح!");
    document.getElementById("name").value = "";
  }).catch((err) => {
    alert("حدث خطأ: " + err.message);
  });
};
