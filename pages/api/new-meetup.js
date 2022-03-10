export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        res.status(200).json(data);
    }
};
