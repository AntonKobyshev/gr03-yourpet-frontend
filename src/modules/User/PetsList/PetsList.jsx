import React from "react";
import PetsItem from "../PetsItem/PetsItem";
import css from "./PetsList.module.css";

const petData = [
  {
    id: 1,
    name: "Jack",
    birthDate: "22.04.2018",
    type: "Persian cat",
    comments:
      "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bit shy, he's a loyal and affectionate lap cat.",
  },
  {
    id: 2,
    name: "Bella",
    birthDate: "15.07.2019",
    type: "Golden Retriever",
    comments:
      "Bella is a friendly and enefgggggggggggg gggggggggggggggggg ggggggggg gggggggggg gggggggggggggggggggg ggggggggggg ggggggggggg ggggggggggg ggggggggggg ggggggggggggggggggggggg ggggggggggg gggggggg gggggg ggggr getic Golden Retriever. She enjoys playing fetch and going for long walks. She's great with kids and loves belly rubs.",
  },
  {
    id: 3,
    name: "Whiskers",
    birthDate: "10.12.2020",
    type: "Siamese cat",
    comments:
      "Whiskers is a curious Siamese cat with striking blue eyes. He's playful and loves to explore his surroundings. He's also known for his distinctive vocalizations.",
  },
];

const PetsList = () => {
  return (
    <div className={css.listContainer}>
      {petData.length > 0 ? (
        petData.map((pet) => <PetsItem key={pet.id} pet={pet} />)
      ) : (
        <p className={css.title}>There are no animals added yet.</p>
      )}
    </div>
  );
};

export default PetsList;
