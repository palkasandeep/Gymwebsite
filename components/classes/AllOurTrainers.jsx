
// import styles from "./classes.module.css";
// import { allOurTrainersData } from "../../data/data";

// const AllOurTrainers = () => {
//   return (
//     <div className={`${styles["all-trainers"]} container sections-padding`}>
//       <div className={styles["trainers-text"]}>
//         <p className="paragraph">Our Trainers</p>
//         <h2>We Trained You to Gain</h2>
//       </div>
//       <div className={styles.classes}>
//         {allOurTrainersData.map((ele) => {
//           return (
//             <div key={ele.id} data-aos="fade-right">
//               <img src={ele.image} alt="" />
//               <h3>{ele.title}</h3>
//              <a href="https://www.youtube.com/watch?v=354ezj2UHdM"><button className="btn btn-primary">check out</button></a>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default AllOurTrainers;
import styles from "./classes.module.css";
import { allOurTrainersData } from "../../data/data";

const AllOurTrainers = () => {
  return (
    <div className={`${styles["all-trainers"]} container sections-padding`}>
      <div className={styles["trainers-text"]}>
        <p className="paragraph">Our Trainers</p>
        <h2>We Trained You to Gain</h2>
      </div>
      <div className={styles.classes}>
        {allOurTrainersData.map((ele) => {
          return (
            <div key={ele.id} data-aos="fade-right">
              <img src={ele.image} alt="" />
              <h3>{ele.title}</h3>
              <a href={ele.videolink} target="_blank" rel="noopener noreferrer">
                <button >Check out</button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllOurTrainers;
