import React, { useEffect, useState } from "react";

export default function ListaSaldos() {
  const [saldos, setSaldos] = useState([]);

  const fetchSaldos = async () => {
    const res = await fetch("/saldos");
    const data = await res.json();
    setSaldos(data.saldos);
  };

  useEffect(() => {
    fetchSaldos();
  }, []);

  return (
    <div>
      <button onClick={fetchSaldos}>Atualizar Todos</button>
      <ul>
        {saldos.map((s, i) => (
          <li key={i}>{s.nome}: {s.saldo}</li>
        ))}
      </ul>
    </div>
  );
}
