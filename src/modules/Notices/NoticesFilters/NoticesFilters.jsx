import React, { useState } from "react";
import css from "./NoticesFilters.module.css";
import FilterIconBlue from "../../../images/icons/filterBlue.svg";
import FilterIconWhite from "../../../images/icons/filterWhite.svg";

import ArrowDown from "../../../images/icons/chevron-down.svg";
import Box from "../../../images/icons/round.svg";
const Filter = () => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const [isAgeMenuOpen, setAgeMenuOpen] = useState(false);
  const [isGenderMenuOpen, setGenderMenuOpen] = useState(false);
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);

  const toggleFilter = () => {
    setFilterOpen(!isFilterOpen);
  };

  const toggleAgeMenu = () => {
    setAgeMenuOpen(!isAgeMenuOpen);
  };

  const toggleGenderMenu = () => {
    setGenderMenuOpen(!isGenderMenuOpen);
  };

  const toggleAgeOption = (age) => {
    if (selectedAges.includes(age)) {
      setSelectedAges(selectedAges.filter((a) => a !== age));
    } else {
      setSelectedAges([...selectedAges, age]);
    }
  };

  const toggleGenderOption = (gender) => {
    if (selectedGenders.includes(gender)) {
      setSelectedGenders(selectedGenders.filter((g) => g !== gender));
    } else {
      setSelectedGenders([...selectedGenders, gender]);
    }
  };

  return (
    <div>
      <button
        className={isFilterOpen ? css.filterBtnOpen : css.filterBtn}
        onClick={toggleFilter}
      >
        <p className={css.filterBtnText}>Filter</p>
        {isFilterOpen ? (
          <img src={FilterIconWhite} alt="filter icon white" />
        ) : (
          <img src={FilterIconBlue} alt="filter icon blue" />
        )}
      </button>
      {isFilterOpen && (
        <div className={css.filterMenu}>
          <h3 className={css.filtersTitle}>Filters</h3>
          <button onClick={toggleAgeMenu} className={css.filterSubmenuBtn}>
            {!isAgeMenuOpen && <img src={ArrowDown} alt="arrow down" />} By age
          </button>
          {isAgeMenuOpen && (
            <div className={css.filterSubmenu}>
              <button className={css.filterSubmenuBtn} onClick={toggleAgeMenu}>
                By age
              </button>
              <label className={css.checkbox}>
                <input
                  type="checkbox"
                  checked={selectedAges.includes("up to 1 year")}
                  onChange={() => toggleAgeOption("up to 1 year")}
                />
                <img src={Box} alt="chekbox" className={css.checkmark} />
                up to 1 year
              </label>
              <label className={css.checkbox}>
                <input
                  type="checkbox"
                  checked={selectedAges.includes("up to 2 years")}
                  onChange={() => toggleAgeOption("up to 2 years")}
                />
                <img src={Box} alt="chekbox" className={css.checkmark} />
                up to 2 years
              </label>
              <label className={css.checkbox}>
                <input
                  type="checkbox"
                  checked={selectedAges.includes("from 2 years")}
                  onChange={() => toggleAgeOption("from 2 years")}
                />
                <img src={Box} alt="chekbox" className={css.checkmark} />
                from 2 years
              </label>
            </div>
          )}
          <button onClick={toggleGenderMenu} className={css.filterSubmenuBtn}>
            {!isGenderMenuOpen && <img src={ArrowDown} alt="arrow down" />}
            By gender
          </button>
          {isGenderMenuOpen && (
            <div className={css.filterSubmenu}>
              <button
                className={css.filterSubmenuBtn}
                onClick={toggleGenderMenu}
              >
                By gender
              </button>
              <label className={css.checkbox}>
                <input
                  type="checkbox"
                  checked={selectedGenders.includes("male")}
                  onChange={() => toggleGenderOption("male")}
                />
                <img src={Box} alt="chekbox" className={css.checkmark} />
                male
              </label>
              <label className={css.checkbox}>
                <input
                  type="checkbox"
                  checked={selectedGenders.includes("female")}
                  onChange={() => toggleGenderOption("female")}
                />
                <img src={Box} alt="chekbox" className={css.checkmark} />
                female
              </label>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Filter;
