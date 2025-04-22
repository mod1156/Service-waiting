
import { db, ref, onChildAdded, remove } from "./firebase.js";

const clientList = document.getElementById("clientList");
const alertSound = document.getElementById("alertSound");

onChildAdded(ref(db, "clients"), (snapshot) => {
  const data = snapshot.val();
  const li = document.createElement("li");
  li.textContent = `${data.name} - ${data.service}`;

  const del = document.createElement("button");
  del.textContent = "تمت الخدمة";
  del.onclick = () => remove(ref(db, "clients/" + snapshot.key));

  li.appendChild(del);
  clientList.appendChild(li);

  alertSound.play();
});
