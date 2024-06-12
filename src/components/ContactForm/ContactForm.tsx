import React, { useState } from "react";
import "./ContactForm.css"; // Importe o arquivo CSS
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Verificar se algum campo está em branco
    if (formData.name === "" || formData.email === "" || formData.message === "") {
      alert("Por favor, preencha todos os campos.");
      return; // Não envia o formulário se algum campo estiver em branco
    }
    try {
      const formDataRecord: Record<string, unknown> = {
        name: formData.name,
        email: formData.email,
        message: formData.message
      };
      await emailjs.send('service_g4w74n8', 'template_0rxvwgb', formDataRecord, '7HkgGM6ObxkFTmpRX');
      alert("Email enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      alert("Erro ao enviar email. Por favor, tente novamente mais tarde. Detalhes do erro: " + error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
        required
        className="form-input"
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
        required
        className="form-input"
      />
      <textarea
        name="message"
        placeholder="Mensagem"
        value={formData.message}
        onChange={handleChange}
        required
        className="form-textarea"
      ></textarea>
      <button type="submit" className="form-button">Enviar</button>
    </form>
  );
};

export default ContactForm;
