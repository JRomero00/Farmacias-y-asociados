"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [name, setName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const session = localStorage.getItem("session");
    if (!session) {
      router.push("/login");
    }
    else{
      const data = JSON.parse(session);
      setName(data.name);
    }
  }, [router]); // 👈 Corregido aquí también

  const handleLogout = () => {
    localStorage.removeItem("session");
    router.push("/login");
  };

  return (
    <main className="min-h-screen p-4">
      <h1 className="text-2xl font-bold">{name ? `Hola, ${name}! 👋` : "Bienvenido!"}</h1>
      <p className="mt-2">Estás dentro de una ruta protegida.</p>
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Cerrar sesión
      </button>
    </main>
  );
}