import React from "react";
import "./others.css";
import OtherData from "./Otherddd";
import oi from "../Assets/2.jpg";
import oi1 from "../Assets/4.jpg";
import oi2 from "../Assets/3.jpg";
import map from "../Assets/root-map.gif";
import ramn from "../Assets/upasana-saigal-HCepniMOEa8-unsplash.jpg";
import bhim from "../Assets/Lake_Bhimtal.jpg";
import naku from "../Assets/harikishor-singh-N7OpRZ2Q2G8-unsplash.jpg";
import sat from "../Assets/SatTal.jpg";
import alm from "../Assets/miheer-tewari-D2sztV_gUfg-unsplash.jpg";
import gho from "../Assets/thousands-of-bells-are.jpg";

const Others = () => {
  return (
    <>
      <div className="oth">
        <div className="toptt">
          <h1>Other Places Nearby</h1>
          <img
            src={map}
            alt="Error"
            style={{ width: "10rem", height: "10rem" }}
          />
        </div>
        <p>
          Embark on a journey through nearby wonders. From picturesque parks to
          vibrant markets, each place offers a distinct experience. Immerse
          yourself in local culture and craft lasting memories in these
          captivating destinations.
        </p>
        <div className="other-card">
          <OtherData
            oimg={bhim}
            ohead="BHIMTAL"
            otext="Nestled just 22 kilometers from Nainital, Bhimtal is a tranquil lakeside town named after the legendary Bhima from the Mahabharata. Its centerpiece, the stunning Bhimtal Lake, is a serene escape offering boating and water sports. To access Bhimtal, embark on a picturesque 40-minute drive southwest on NH109, reveling in the surrounding natural splendor. Explore the lake, visit the Bhimeshwar Mahadev Temple, and enjoy the calming ambiance."
          />
          <OtherData
            oimg={sat}
            ohead="SATTAL"
            otext="Located about 40 kilometers from Nainital, Sattal, meaning 'Seven Lakes,' is a picturesque cluster of interconnected water bodies amidst lush greenery. To reach this natural wonder, enjoy a scenic 1.5-hour drive via Bhowali and Nathuakhan, relishing the journey's beauty. Sattal offers a tranquil retreat and a birdwatcher's paradise. Explore the lakes, go for nature walks, and immerse yourself in the serene environment."
          />
          <OtherData
            oimg={naku}
            ohead="KHURPATAAL"
            otext="Khurpaatal, nestled approximately 10 kilometers from Nainital, is a hidden gem known for its tranquil lake and lush surroundings. The pristine Khurpaatal Lake offers opportunities for boating and fishing, making it a perfect spot for relaxation. To reach Khurpaatal, embark on a short 30-minute drive west on NH109 from Nainital, reveling in the scenic beauty along the way. Explore the lakeside, enjoy a peaceful picnic, or take a nature walk in the nearby woods. Khurpaatal provides a serene escape for those seeking a quieter alternative to the bustling Nainital."
          />
        </div>
        <div className="other-card">
          <OtherData
            oimg={ramn}
            ohead="RAMNAGAR"
            otext="Located 65 kilometers from Nainital, Ramnagar is the gateway to the renowned Jim Corbett National Park, a biodiverse sanctuary and haven for nature enthusiasts and wildlife aficionados. To reach Ramnagar, embark on a leisurely 2-hour drive south on NH309 from Nainital, immersing yourself in the scenic beauty of the surrounding landscapes. Once in Ramnagar, explore the park's diverse flora and fauna, embark on thrilling safaris, and enjoy the serenity of the Kosi River. It's a paradise for wildlife lovers and adventure seekers."
          />
          <OtherData
            oimg={alm}
            ohead="ALMORA"
            otext="Almora, a cultural gem located about 63 kilometers from Nainital, offers a rich heritage and awe-inspiring views of the Himalayas. To journey to Almora, take a scenic 2-hour drive southeast on NH109, enjoying the panoramic vistas en route. Explore the ancient temples, indulge in local cuisine, and stroll through the vibrant markets."
          />
          <OtherData
            oimg={gho}
            ohead="GHORAKHAL"
            otext="Situated approximately 34 kilometers from Nainital, Ghorakhal is famed for its picturesque landscapes and the revered Golu Devta temple. The drive to Ghorakhal, via Bhowali, is a delightful journey that usually takes around 1 hour, allowing you to soak in the natural beauty. Visit the temple, enjoy the scenic vistas, and take leisurely walks in the surrounding woods."
          />
        </div>
      </div>
    </>
  );
};

export default Others;
