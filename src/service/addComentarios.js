// /pages/api/addComentario.js
export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { nome, imagem, star, comentario } = req.body;
      const newComment = { nome, imagem, star, comentario };
      
      try {
        const response = await fetch(WRITE_API_KEY, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.WRITE_API_KEY}`
          },
          body: JSON.stringify(newComment)
        });
  
        if (response.ok) {
          const result = await response.json();
          res.status(200).json(result.document);
        } else {
          res.status(response.status).json({ error: 'Erro ao adicionar comentário' });
        }
      } catch (error) {
        res.status(500).json({ error: 'Erro ao adicionar comentário' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  