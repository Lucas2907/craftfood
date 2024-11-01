// /pages/api/getComentarios.js
export default async function handler(req, res) {
    if (req.method === 'GET') {
      try {
        const response = await fetch(`https://api.hashnode.com/v1/collections/6716d810001ed71980ed/documents`);
        const data = await response.json();
        res.status(200).json(data.documents);
      } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar comentários' });
      }
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  