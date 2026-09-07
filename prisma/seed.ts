import 'dotenv/config';
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const categories = [
  { slug: 'tawhid', title: 'Единобожие', sortOrder: 1 },
  { slug: 'revelation', title: 'Коран', sortOrder: 2 },
  { slug: 'sunnah-hadith', title: 'Сунна и хадисы', sortOrder: 3 },
  { slug: 'prophet', title: 'Пророк Мухаммад ﷺ', sortOrder: 4 },
  { slug: 'sharia-law', title: 'Шариат и право', sortOrder: 5 },
  { slug: 'islam-science', title: 'Ислам и наука', sortOrder: 6 },
  { slug: 'islam-other-religions', title: 'Ислам и другие религии', sortOrder: 7 },
  { slug: 'history-of-islam', title: 'История Ислама', sortOrder: 8 },
  { slug: 'practice-daily-life', title: 'Практика и повседневная жизнь', sortOrder: 9 },
];

const tags = [
  {
    slug: 'atheism',
    title: 'Атеизм',
  },
  {
    slug: 'christianity',
    title: 'Христианство',
  },
  {
    slug: 'judaism',
    title: 'Иудаизм',
  },
  {
    slug: 'intra-islamic',
    title: 'Внутриисламская дискуссия',
  },
];

async function main() {
  try {
    for (const category of categories) {
      await prisma.category.create({ data: category });
    }
    for (const tag of tags) {
      await prisma.tag.create({ data: tag });
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    await pool.end();
  }
}

main();
