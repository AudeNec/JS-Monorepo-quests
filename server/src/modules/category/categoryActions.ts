import categoryRepository from "./categoryRepository";

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

import type { RequestHandler } from "express";

// const browse: RequestHandler = (req, res) => {
//   if (req.query.q != null) {
//     const filteredCategories = categories.filter((category) =>
//       category.name.includes(req.query.q as string),
//     );

//     res.json(filteredCategories);
//   } else {
//     res.json(categories);
//   }
// };

const browse: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();

  res.json(categoriesFromDB);
};

const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);

  const category = categories.find((c) => c.id === parsedId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

export default { browse, read };
