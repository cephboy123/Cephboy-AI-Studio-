import { useEffect, useState } from "react";
import { auth, loginWithGoogle, logout } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Login() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });

    return () => unsub();
  }, []);

  if (!user) {
    return (
      <div>
        <button onClick={loginWithGoogle}>
          Login with Google
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <img
        src={user.photoURL}
        alt="profile"
        style={{ width: 40, height: 40, borderRadius: "50%" }}
      />
      <span>{user.displayName}</span>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
