import { db } from "../firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { getDoc } from "firebase/firestore";

export async function enrollTool(userId, toolId) {
  const ref = doc(db, "toolEnrollments", `${userId}_${toolId}`);
  const snap = await getDoc(ref);

  if (snap.exists()) return; // already enrolled

  await setDoc(ref, {
    userId,
    toolId,
    status: "active",
    enrolledAt: serverTimestamp(),
  });
}