import db from "./db.json";

type AnimalResultType = {
  type: string;
  id: number;
  url: string;
  title: string;
  description: string;
  image: string;
}

const animalsDb = db satisfies AnimalResultType[];

export default animalsDb;
