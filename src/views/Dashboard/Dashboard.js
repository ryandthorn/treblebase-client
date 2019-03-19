import React from "react";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <section className="dashboard-navigation">
        <div className="active tab">Opportunities</div>
        <div className="tab">Profile</div>
      </section>
      <h1 className="inline-center">Hello Ryan!</h1>
      <h2 className="block-center">
        Here are some recently-posted opportunities in your area:
      </h2>

      <section className="feed">
        <div className="card-wrapper">
          <h2>Looking for a tenor</h2>
          <h3>Pro Arte Quartet</h3>
          <h3>Portland, OR</h3>
          <p>
            The weather is amazing, walk with me through the pathway of more
            success. Take this journey with me, Lion! It’s on you how you want
            to live your life. Everyone has a choice. I pick my choice, squeaky
            clean. Always remember in the jungle there’s a lot of they in there,
            after you overcome they, you will make it to paradise. Watch your
            back, but more importantly when you get out the shower, dry your
            back, it’s a cold world out there. Another one.
          </p>
          <div className="inline-center">
            <button>View details</button>
          </div>
        </div>
        <div className="card-wrapper">
          <h2>Open call for 2020 season</h2>
          <h3>Vancouver Symphony</h3>
          <h3>Vancouver, WA</h3>
          <p>
            The key is to drink coconut, fresh coconut, trust me. Celebrate
            success right, the only way, apple. It’s on you how you want to live
            your life. Everyone has a choice. I pick my choice, squeaky clean.
            Let me be clear, you have to make it through the jungle to make it
            to paradise, that’s the key, Lion! I’m giving you cloth talk, cloth.
            Special cloth alert, cut from a special cloth. Eliptical talk. The
            key is to enjoy life, because they don’t want you to enjoy life. I
            promise you, they don’t want you to jetski, they don’t want you to
            smile.
          </p>
          <div className="inline-center">
            <button>View details</button>
          </div>
        </div>
        <div className="card-wrapper">
          <h2>String quartet needed for wedding</h2>
          <h3>Lotsa Gigs LLC</h3>
          <h3>Gresham, OR</h3>
          <p>
            Lorem Khaled Ipsum is a major key to success. How’s business?
            Boomin. They don’t want us to eat. Congratulations, you played
            yourself. Egg whites, turkey sausage, wheat toast, water. Of course
            they don’t want us to eat our breakfast, so we are going to enjoy
            our breakfast. Cloth talk. The weather is amazing, walk with me
            through the pathway of more success. Take this journey with me,
            Lion! I told you all this before, when you have a swimming pool, do
            not use chlorine, use salt water, the healing, salt water is the
            healing. Hammock talk come soon.
          </p>
          <div className="inline-center">
            <button>View details</button>
          </div>
        </div>
      </section>
    </div>
  );
}
