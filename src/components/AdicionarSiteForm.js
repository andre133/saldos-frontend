import React, { useState } from "react";

export default function AdicionarSiteForm() {
  const [form, setForm] = useState({ nome: "", url: "", login: "", senha: "", tipo: "multi_bet" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/adicionar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Site adicionado");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nome" placeholder="Nome" onChange={handleChange} />
      <input name="url" placeholder="URL" onChange={handleChange} />
      <input name="login" placeholder="Login" onChange={handleChange} />
      <input name="senha" placeholder="Senha" onChange={handleChange} type="password" />
      <select name="tipo" onChange={handleChange}>
        <option value="multi_bet">Multi.bet</option>
      </select>
      <button type="submit">Adicionar Site</button>
    </form>
  );
}
