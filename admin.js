
import { db, ref, onChildAdded, onValue, remove } from "./firebase.js";

const clientList = document.getElementById("clientList");
const alertSound = document.getElementById("alertSound");

let soundEnabled = false;
document.getElementById("enableSound").onclick = () => {
  alertSound.play().catch(() => {});
  soundEnabled = true;
  document.getElementById("enableSound").style.display = "none";
};

// وظيفة لإعادة تحميل القائمة بالكامل كل 3 ثوانٍ
function refreshClients() {
  ref(db, "clients");
  onValue(ref(db, "clients"), (snapshot) => {
    clientList.innerHTML = ""; // حذف القائمة القديمة
    snapshot.forEach((childSnapshot) => {
      const data = childSnapshot.val();
      const li = document.createElement("li");
      li.textContent = `${data.name} - ${data.service}`;

      const del = document.createElement("button");
      del.textContent = "تمت الخدمة";
      del.onclick = async () => {
        try {
          await remove(ref(db, "clients/" + childSnapshot.key));
          li.remove();
        } catch (err) {
          alert("حدث خطأ أثناء حذف العميل: " + err.message);
          console.error(err);
        }
      };

      li.appendChild(del);
      clientList.appendChild(li);
    });

    // تشغيل التنبيه عند وجود عملاء جدد فقط
    if (soundEnabled && snapshot.size > 0) {
      alertSound.play().catch(e => console.warn("فشل تشغيل الصوت:", e));
    }
  });
}

// التحديث التلقائي كل 3 ثواني
setInterval(refreshClients, 3000);
refreshClients();
