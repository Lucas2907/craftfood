"use client";
import { useState, useEffect } from 'react';
import { Client, Databases, ID } from "appwrite";

export default function Comentarios() {
  const [comentarios, setComentarios] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    userName: '',
    imagemUrl: '',
    estrelas: 3,
    comentario: ''
  });

  // Configuração do Appwrite Client
  const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);

  const databases = new Databases(client);
  const COLLECTION_ID = process.env.NEXT_PUBLIC_COLLECTION_ID;
  const DATABASE_ID = process.env.NEXT_PUBLIC_DATABASE_ID;

  // Carregar os comentários do banco de dados
  useEffect(() => {
    async function fetchComentarios() {
      try {
        const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
        setComentarios(response.documents || []);
      } catch (error) {
        console.error("Erro ao carregar comentários:", error);
      }
    }
    fetchComentarios();
  }, [databases, DATABASE_ID, COLLECTION_ID]);

  // Manipular mudanças no formulário
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Enviar dados para o banco de dados
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        {
          userName: formData.userName,
          imagemUrl: formData.imagemUrl,
          estrelas: parseInt(formData.estrelas),
          comentario: formData.comentario
        }
      );
      console.log("Documento criado:", response); // Verifique a resposta
      setComentarios([...comentarios, response]); // Adiciona o novo comentário ao estado
      setFormData({ userName: '', imagemUrl: '', estrelas: 3, comentario: '' });
      setShowForm(false);
    } catch (error) {
      console.error("Erro ao enviar comentário:", error.message); // Exibe o erro detalhado
    }
  };

  return (
    <div>
      <h2>Comentários</h2>
      <button onClick={() => setShowForm(!showForm)}>Adicionar Comentário</button>

      {showForm && (
        <form onSubmit={handleSubmit}>
          <input type="text" name="userName" placeholder="userName" value={formData.userName} onChange={handleChange} required />
          <input type="url" name="imagemUrl" placeholder="URL da imagemUrl" value={formData.imagemUrl} onChange={handleChange} required />
          <input type="number" name="estrelas" placeholder="Estrelas (1 a 5)" min="1" max="5" value={formData.estrelas} onChange={handleChange} required />
          <textarea name="comentario" placeholder="Comentário" value={formData.comentario} onChange={handleChange} required />
          <button type="submit">Enviar</button>
        </form>
      )}

      <div className="comentarios-list">
        {comentarios.map((comentario) => (
          <div key={comentario.$id} className="comentario-card">
            <img src={comentario.imagemUrl} crossOrigin="anonymous" alt={`${comentario.userName}'s imagemUrl`} />
            <h3>{comentario.userName}</h3>
            <p>{'⭐'.repeat(comentario.estrelas)}</p>
            <p>{comentario.comentario}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
