// import React, { useState } from "react";
// import styled from "styled-components";

// const Wrapper = styled.section`
//   .buttons-container {
//     display: block;

//     gap: 30px;
//     justify-content: space-between;
//     justify-items: center;
//     margin-top: 20px;
//     font-size: 15px;
//     margin-right: 10%;
//     margin-left: 10%;
//     border-radius: 10px;
//     padding-left: 10px;
//     padding-bottom: 20px;
//     padding-top: 20px;
//     background-color: bisque;
//   }
//   .riz {
//     display: flex;
//     justify-content: space-between;
//     gap: 30px;
//   }
//   .label-order {
//     display: flex;
//     justify-content: center;
//     gap: 10px;
//   }
//   .progress-button {
//     display: flex;
//     flex-direction: column;
//     display: inline-block;
//     align-items: center;
//     padding: 10px 20px;
//     border: none;
//     border-radius: 5px;
//     background-color: #f0f0f0;
//     color: #333;
//     font-size: 16px;
//     cursor: pointer;
//     transition: background-color 0.3s ease;
//   }

//   .progress-button:hover {
//     background-color: #ddd;
//   }

//   .progress-bar {
//     width: 100%;
//     height: 10px;
//     background-color: #eee;
//     border-radius: 5px;
//     // margin-top: 5px;
//     overflow: hidden;
//   }

//   .progress {
//     height: 100%;
//     background-color: #4caf50;
//     transition: width 0.3s ease;
//   }

//   .progress-button.done .progress {
//     width: 100%;
//   }

//   .control-wrapper {
//     display: flex;
//     flex-direction: row;
//     align-items: center;

//     width: 100%;
//     gap: 30px;
//   }

//   .progress-checkbox {
//     margin-bottom: 10px;
//   }
// `;

// const ProgressBar = ({ progress }) => {
//   const progressStyle = {
//     width: `${progress}%`,
//   };

//   return (
//     <div className="progress-bar">
//       <div className="progress" style={progressStyle}></div>
//     </div>
//   );
// };

// const TrackOrder = () => {
//   const [progressStatus, setProgressStatus] = useState({
//     orderDone: false,
//     shippingDone: false,
//     packageArrived: false,
//     delivered: false,
//   });

//   //   const handleButtonClick = (buttonName) => {
//   //     setProgressStatus((prevStatus) => ({
//   //       ...prevStatus,
//   //       [buttonName]: !prevStatus[buttonName],
//   //     }));
//   //   };

//   const handleCheckBoxChange = (buttonName, value) => {
//     setProgressStatus((prevStatus) => ({
//       ...prevStatus,
//       [buttonName]: value,
//     }));
//   };

//   return (
//     <Wrapper>
//       <div className="buttons-container">
//         <div className="riz">
//           <div className="control-wrapper">
//             <label className="label-order">
//               <input
//                 type="checkbox"
//                 className="progress-checkbox"
//                 checked={progressStatus.orderDone}
//                 onChange={(e) =>
//                   handleCheckBoxChange("orderDone", e.target.checked)
//                 }
//               />{" "}
//               Order Done{" "}
//             </label>

//             <ProgressBar progress={progressStatus.orderDone ? 100 : 0} />
//           </div>

//           <div className="control-wrapper">
//             <label className="label-order">
//               <input
//                 type="checkbox"
//                 className="progress-checkbox"
//                 checked={progressStatus.shippingDone}
//                 onChange={(e) =>
//                   handleCheckBoxChange("shippingDone", e.target.checked)
//                 }
//               />{" "}
//               Shipping Done{" "}
//             </label>

//             <ProgressBar progress={progressStatus.shippingDone ? 100 : 0} />
//           </div>

//           <div className="control-wrapper">
//             <label className="label-order">
//               <input
//                 type="checkbox"
//                 className="progress-checkbox"
//                 checked={progressStatus.packageArrived}
//                 onChange={(e) =>
//                   handleCheckBoxChange("packageArrived", e.target.checked)
//                 }
//               />{" "}
//               Package Arrived{" "}
//             </label>

//             <ProgressBar progress={progressStatus.packageArrived ? 100 : 0} />
//           </div>

//           <div className="control-wrapper">
//             <label className="label-order">
//               <input
//                 type="checkbox"
//                 className="progress-checkbox"
//                 checked={progressStatus.delivered}
//                 onChange={(e) =>
//                   handleCheckBoxChange("delivered", e.target.checked)
//                 }
//               />{" "}
//               Delivered{" "}
//             </label>
//             {/* <button
//             className={`progress-button ${
//               progressStatus.delivered ? "done" : ""
//             }`}
//             onClick={() => handleButtonClick("delivered")}
//           >
//             Delivered */}
//             {/* <ProgressBar progress={progressStatus.delivered ? 100 : 0} /> */}
//             {/* </button> */}
//           </div>
//         </div>
//         <br />
//         <div className="riz">
//           <div className="control-wrapper">
//             Wed, Nov 15, 2023, 11:18:53 PM India Standard Time
//           </div>
//           <div className="control-wrapper">At 9:27pm</div>
//           <div className="control-wrapper">At 9:27pm</div>
//           <div className="control-wrapper">At 9:27pm</div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default TrackOrder;

import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .buttons-container {
    display: block;

    gap: 30px;
    justify-content: space-between;
    justify-items: center;
    margin-top: 20px;
    font-size: 15px;
    margin-right: 10%;
    margin-left: 10%;
    border-radius: 10px;
    padding-left: 10px;
    padding-bottom: 20px;
    padding-top: 20px;
    background-color: bisque;
  }
  .riz {
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }
  .label-order {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .progress-button {
    display: flex;
    flex-direction: column;
    display: inline-block;
    align-items: center;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #f0f0f0;
    color: #333;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .progress-button:hover {
    background-color: #ddd;
  }

  .progress-bar {
    width: 100%;
    height: 10px;
    background-color: #eee;
    border-radius: 5px;
    // margin-top: 5px;
    overflow: hidden;
  }

  .progress {
    height: 100%;
    background-color: #4caf50;
    transition: width 0.3s ease;
  }

  .progress-button.done .progress {
    width: 100%;
  }

  .control-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    gap: 30px;
  }

  .progress-checkbox {
    margin-bottom: 10px;
  }
`;

const ProgressBar = ({ progress }) => {
  const progressStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="progress-bar">
      <div className="progress" style={progressStyle}></div>
    </div>
  );
};

const TrackOrder = ({
  createdAt,
  delivarDate,
  shippingDoneDate,
  packageArrivedDate,
  orderDone1,
  shippingDone1,
  packageArrived1,
  delivered1,
}) => {
  const [progressStatus, setProgressStatus] = useState({
    // orderDone: false,
    // shippingDone: false,
    // packageArrived: false,
    // delivered: false,
    orderDone: orderDone1,
    shippingDone: shippingDone1,
    packageArrived: packageArrived1,
    delivered: delivered1,
  });

  //   const handleButtonClick = (buttonName) => {
  //     setProgressStatus((prevStatus) => ({
  //       ...prevStatus,
  //       [buttonName]: !prevStatus[buttonName],
  //     }));
  //   };

  //   const handleCheckBoxChange = (buttonName, value) => {
  //     setProgressStatus((prevStatus) => ({
  //       ...prevStatus,
  //       [buttonName]: value,
  //     }));
  //   };

  return (
    <Wrapper>
      <div className="buttons-container">
        <div className="riz">
          <div className="control-wrapper">
            <label className="label-order">
              <input
                type="checkbox"
                className="progress-checkbox"
                readOnly={true}
                checked={progressStatus.orderDone}
                // onChange={(e) =>
                //   handleCheckBoxChange("orderDone", e.target.checked)
                // }
              />{" "}
              Order Done{" "}
            </label>

            <ProgressBar progress={progressStatus.orderDone ? 100 : 0} />
          </div>

          <div className="control-wrapper">
            <label className="label-order">
              <input
                type="checkbox"
                className="progress-checkbox"
                readOnly={true}
                checked={progressStatus.shippingDone}
                // onChange={(e) =>
                //   handleCheckBoxChange("shippingDone", e.target.checked)
                // }
              />{" "}
              Shipping Done{" "}
            </label>

            <ProgressBar progress={progressStatus.shippingDone ? 100 : 0} />
          </div>

          <div className="control-wrapper">
            <label className="label-order">
              <input
                type="checkbox"
                className="progress-checkbox"
                readOnly={true}
                checked={progressStatus.packageArrived}
                // onChange={(e) =>
                //   handleCheckBoxChange("packageArrived", e.target.checked)
                // }
              />{" "}
              Package Arrived{" "}
            </label>

            <ProgressBar progress={progressStatus.packageArrived ? 100 : 0} />
          </div>

          <div className="control-wrapper">
            <label className="label-order">
              <input
                type="checkbox"
                className="progress-checkbox"
                checked={progressStatus.delivered}
                readOnly={true}
                // onChange={(e) =>
                //   handleCheckBoxChange("delivered", e.target.checked)
                // }
              />{" "}
              Delivered{" "}
            </label>
            {/* <button
            className={`progress-button ${
              progressStatus.delivered ? "done" : ""
            }`}
            onClick={() => handleButtonClick("delivered")}
          >
            Delivered */}
            {/* <ProgressBar progress={progressStatus.delivered ? 100 : 0} /> */}
            {/* </button> */}
          </div>
        </div>
        <br />
        <div className="riz">
          <div
            style={{ color: "green", fontSize: "15px" }}
            className="control-wrapper"
          >
            {createdAt}
          </div>
          <div className="control-wrapper">
            {progressStatus.shippingDone ? (
              <p style={{ color: "green", fontSize: "15px" }}>
                {" "}
                {shippingDoneDate}
              </p>
            ) : (
              <span> &nbsp; </span>
            )}
          </div>
          <div className="control-wrapper">
            {progressStatus.packageArrived ? (
              <p style={{ color: "green", fontSize: "15px" }}>
                {" "}
                {packageArrivedDate}
              </p>
            ) : (
              <span> &nbsp; </span>
            )}
          </div>
          <div className="control-wrapper">
            {progressStatus.delivered ? (
              <p style={{ color: "green", fontSize: "15px" }}>{delivarDate}</p>
            ) : (
              <span> &nbsp; </span>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TrackOrder;
