import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import styles from "./styles.module.css";

const DropDownComponent = ({
  title,
  items,
  value,
  setValue,
  index,
  color,
  setFilteredValues,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.box}
        onClick={() => setActive((prev) => !prev)}
        style={{ borderColor: color }}
      >
        <p className={styles.title} style={{ color: color }}>
          {title}
        </p>
        {active ? (
          <BiChevronUp className={styles.arrow} color={color} />
        ) : (
          <BiChevronDown className={styles.arrow} color={color} />
        )}
      </div>
      {active && (
        <div className={styles.dropDowns} style={{ borderColor: color }}>
          {items.map((el, i) => (
            <p
              className={styles.items}
              key={i}
              style={{ color: color }}
              onClick={() => {
                setActive(false);
                setValue(el);
                setFilteredValues((prev) => [...prev, el]);
              }}
            >
              {el}{" "}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDownComponent;

// import React, { useState } from "react";
// import { BiChevronDown, BiChevronUp } from "react-icons/bi";
// import styles from "./styles.module.css";

// const DropDownComponent = ({ title, items, value, setValue, index }) => {
//   const [active, setActive] = useState(false);
//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.box} onClick={() => setActive((prev) => !prev)}>
//         <p className={styles.title}>{title}</p>
//         <BiChevronDown className={styles.arrow} />
//       </div>
//       {active && (
//         <div className={styles.dropDowns}>
//           {items.map((el, i) => (
//             <p className={styles.items} key={i}>
//               {el}{" "}
//             </p>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropDownComponent;
