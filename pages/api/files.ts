import fs from 'fs/promises';

export default async function handler(req: any, res: any) {
  try {
    const files = await fs.readdir('./public/images'); // 여기서 'your-folder'는 실제 폴더 경로로 바꿔야 합니다.
    res.status(200).json({ files });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}