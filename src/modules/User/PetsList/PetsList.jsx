import React from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userMyPets, selectIsLoading } from '../../../redux/auth/auth-selectors';
import PetsItem from "../PetsItem/PetsItem";
import Loader from '../../../shared/components/Loader/Loader'
import css from "./PetsList.module.css";

import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

// const petData = [


//   {
//     id: 1,
//     name: "Jack",
//     birthday: "22.04.2018",
//     type: "Persian cat",
//     comments:
//       "Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys. Although a bit shy, he's a loyal and affectionate lap cat.",
//   },
//   {
//     id: 2,
//     name: "Bella",
//     birthday: "15.07.2019",
//     breed: "Golden Retriever",
//     comments:
//       "Bella is a friendly and enefgggggggggggg gggggggggggggggggg ggggggggg gggggggggg gggggggggggggggggggg ggggggggggg ggggggggggg ggggggggggg ggggggggggg ggggggggggggggggggggggg ggggggggggg gggggggg gggggg ggggr getic Golden Retriever. She enjoys playing fetch and going for long walks. She's great with kids and loves belly rubs.",
//   },
//   {
//     id: 3,
//     name: "Whiskers",
//     birthday: "10.12.2020",
//     breed: "Siamese cat",
//     comments:
//       "Whiskers is a curious Siamese cat with striking blue eyes. He's playful and loves to explore his surroundings. He's also known for his distinctive vocalizations.",
//   },
// ];

const PetsList = () => {
   const isLoading = useSelector(selectIsLoading);
  const pets = useSelector(userMyPets);
  

  return (    
    <div className={css.listContainer}>
      
        {isLoading && pets.length > 0 && (
          <div className={css.petCardWrapper}>
            <ul className={css.list}>
              {pets.map((pet, index) => {
                return (
                  <li key={index} className={css.item}>
                    <PetsItem pet={pet} />
                  </li>
                );
              })}
            </ul>
          </div>
      )}
      

    {!isLoading && (
          <div className={css.petCardWrapper}>
            {pets.length > 0 ? (
              <ul className={css.list}>
                {pets.map((pet, index) => {
                  return (
                    <li key={index} className={css.item}>
                      <PetsItem pet={pet} />
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className={css.title}>{"My pets list empty"}</p>
            )}
          </div>
        )}
      
    
    
      {/* {petData.length > 0 ? (
        petData.map((pet) => <PetsItem key={pet.id} pet={pet} />)
      ) : (
        <p className={css.title}>There are no animals added yet.</p>
      )} */}
    </div>
  );
};

export default PetsList;
