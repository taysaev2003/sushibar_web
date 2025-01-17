import React from 'react';

import styles from '../../../pages/MainPage/MainPage.module.scss';

const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.search__input}>
        <input type="text" placeholder="Найти блюдо" />
      </div>

      <div className={styles.search_icon}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="10.5992"
            cy="10.6532"
            rx="8.59922"
            ry="8.65324"
            fill="#E31E25"
          />
          <path
            d="M20.6745 21.9553C20.3405 21.9445 20.0228 21.807 19.7853 21.5705L17.7488 19.1902C17.3122 18.7909 17.2765 18.1123 17.6688 17.6689C17.8524 17.4831 18.102 17.3787 18.3624 17.3787C18.6228 17.3787 18.8725 17.4831 19.0561 17.6689L21.6172 19.7181C21.9861 20.0957 22.0999 20.6563 21.9078 21.1492C21.7157 21.6422 21.2535 21.9754 20.7279 22L20.6745 21.9553Z"
            fill="#E31E25"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
