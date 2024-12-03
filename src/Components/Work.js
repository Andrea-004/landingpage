import React from "react";
import PickMeals from "../Assets/imgThree.png";
import ChooseMeals from "../Assets/imgTwo.png";
import DeliveryMeals from "../Assets/imgOne.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Your Focus",
      text: "Choose your goal—whether it's studying, working, or creating—and set the time to get started.",
    },
    {
      image: ChooseMeals,
      title: "Stay on Track",
      text: "Follow the Pomodoro technique with focused sessions and breaks to keep your energy high.",
    },
    {
      image: DeliveryMeals,
      title: "Watch Your Progress",
      text: "As you work, your plant grows! Complete your session and see it fully bloom.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Set your focus time, work in short bursts, and watch your plant grow with each session. Stay productive, take breaks, and see your progress bloom!
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" className="work-section-img"/>
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
