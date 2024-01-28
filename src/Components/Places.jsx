import React from "react";
import "./places.css";
import places1 from "../Assets/5.jpg";
import places2 from "../Assets/ishank-choudhary-4IX3HW3dxd0-unsplash.jpg";
import tif1 from "../Assets/abhijeet-byE4AZSMhn8-unsplash.jpg";
import tif2 from "../Assets/tif2.jpg";
import mon1 from "../Assets/IMG-20231026-WA0044.jpg";
import mon2 from "../Assets/mona2.jpg";
import cam1 from "../Assets/IMG-20210418-WA0028.jpg";
import cam2 from "../Assets/cam2.jpg";
import sno1 from "../Assets/snow-view-point.jpg";
import sno2 from "../Assets/sno2.jpg";
import PlacesData from "./PlacesData";

import bino from "../Assets/binocular.png";
const Places = () => {
  return (
    <>
      <div className="places">
        <div className="toptt">
          <h1 className="place-heading">Places to Explore </h1>
          <img src={bino} style={{ width: "5rem", height: "5rem" }} alt="" />
        </div>
        <p className="top-desc">
          Welcome to Tour-e-Go's exclusive guide to Nainital, where every corner
          reveals a new tale of natural splendor and tranquil beauty. Nestled in
          the heart of the Himalayas, this picturesque town offers a retreat
          like no other. Join us on an enchanting journey through its lakes,
          hills, and cultural treasures.
        </p>

        <PlacesData
          heading="1: CHINA PEAK"
          text="China Peak, also known as Naina Peak, is the highest point in Nainital, Uttarakhand, standing tall at 2,615 meters above sea level. Originally named after George William Traill, an Englishman who set up a telescope here in 1842, it eventually came to be called Naina Peak due to its resemblance to an eye ('naina' in Hindi). Today, it remains a popular trekking destination, offering unrivaled panoramic views of the majestic Himalayan range and the surrounding valleys. Located approximately 6 kilometers north of Nainital's town center, the peak lies in the northwestern direction.

To reach this natural marvel, one can opt for a scenic drive via Snow View Point or embark on a picturesque trek through the forested slopes. The journey itself is a visual feast, with every step promising breathtaking vistas. China Peak holds not only historical significance but also captivates visitors with its present-day natural beauty. It's a must-visit for both nature enthusiasts and those intrigued by Nainital's rich past. This iconic landmark continues to stand as a testament to the harmonious blend of history and nature in this enchanting hill station."
          image1={places2}
          image2={places1}
          reversecName="first-place"
        />
        <PlacesData
          heading="2: CAMEL'S BACK"
          text="Camel's Back in Nainital, Uttarakhand, derives its name from its striking resemblance to a camel's hump. This natural rock formation stretches for approximately 3 kilometers, commanding awe-inspiring views of the Himalayan range and the charming town of Nainital. It has become a cherished destination for both tourists and locals seeking a tranquil retreat from the bustling town center.

The area surrounding Camel's Back is a favored spot for leisurely walks and invigorating treks, offering a perfect blend of natural beauty and exercise. Additionally, a cemetery nearby adds a touch of historical significance to the site, further enhancing its appeal. Visitors can immerse themselves in the serene ambiance while basking in the breathtaking scenery.

Camel's Back encapsulates the essence of Nainital, combining its natural wonders with a hint of history. For those in search of a peaceful escape with spectacular views, this landmark proves to be an ideal destination. "
          image1={cam1}
          image2={cam2}
          reversecName="first-place-reverse"
        />
        <PlacesData
          heading="3: SNOW VIEW POINT"
          text="Snow View Point in Nainital, Uttarakhand, is a vantage point renowned for its panoramic vistas of the snow-clad Himalayan peaks. Perched at an altitude of 2,270 meters, it offers a breathtaking spectacle of Nanda Devi, Trisul, and Nanda Kot peaks. Accessible by a picturesque cable car ride or a winding road, reaching Snow View Point is an adventure in itself.

Once there, visitors are greeted with a serene atmosphere and the crisp mountain air. The viewpoint also houses a small temple, adding a touch of spirituality to the natural beauty. It's an ideal spot for both nature enthusiasts and photographers, providing an opportunity to capture the awe-inspiring landscape. Whether under a blanket of snow or against the backdrop of clear blue skies, Snow View Point stands as a testament to the unparalleled beauty of the Himalayas, leaving visitors spellbound with its sheer magnificence.  "
          image1={sno1}
          image2={sno2}
          reversecName="first-place"
        />
        <PlacesData
          heading="4: MONASTERY"
          text="The Tharpa Choling Monastery, nestled in the picturesque Pangot village, is a prominent Tibetan Buddhist sanctuary located approximately 1.5 kilometers from Nainital, Uttarakhand. This serene monastery offers a profound glimpse into Tibetan culture and spirituality. Surrounded by the breathtaking beauty of the Himalayan foothills, it provides a tranquil escape from the bustling city life.

Reaching Tharpa Choling Monastery involves a scenic drive from Nainital, winding through lush forests and idyllic landscapes. The journey itself is an experience, with each turn unveiling more of the region's natural splendor. Upon arrival, visitors are greeted by prayer flags fluttering in the mountain breeze and the gentle chants of monks.

The monastery's most striking feature is its traditional Tibetan architecture, adorned with vibrant murals and intricate mandalas. Inside, one can witness monks engrossed in prayer and meditation, creating an atmosphere of profound spirituality. The panoramic view from the monastery is another highlight, offering a breathtaking vista of the surrounding hills and valleys.

 "
          image1={mon1}
          image2={mon2}
          reversecName="first-place-reverse"
        />
        <PlacesData
          heading="5: TIFFIN TOP"
          text="Perched atop Nainital, Tiffin Top is a renowned vantage point offering panoramic views of the town and the surrounding Himalayan peaks. Located around 4 kilometers from the heart of Nainital, reaching Tiffin Top involves a pleasant trek through the scenic Ayarpatta woods or can be accessed via horseback or by a short car ride.

Tiffin Top, also known as Dorothy's Seat, is named after an English artist Dorothy Kellet. It features a stonework picnic perch, providing a perfect spot for a relaxing meal amidst nature's splendor. The viewpoint's elevation allows for a breathtaking vista, especially during sunrise and sunset, painting the landscape in vivid hues. This popular destination captures the essence of Nainital's natural beauty, making it a must-visit for tourists seeking a memorable hill station experience. "
          image1={tif1}
          image2={tif2}
          reversecName="first-place"
        />
      </div>
    </>
  );
};

export default Places;
