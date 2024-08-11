import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    const { title } = req.query;
    const titleDir = path.resolve(`./public/${title}`);

    if (!fs.existsSync(titleDir)) {
        res.status(404).json({ message: 'Title not found' });
        return;
    }

    const files = fs.readdirSync(titleDir);

    const episodes = files
        .filter(file => file.endsWith('.txt'))
        .map(file => {
            const episodeName = file.replace('.txt', '');
            const filePath = path.join(titleDir, file);
            const embeddingCode = fs.readFileSync(filePath, 'utf8').trim();

            return {
                episodeName,
                embeddingCode,
            };
        });

    res.status(200).json(episodes);
}
