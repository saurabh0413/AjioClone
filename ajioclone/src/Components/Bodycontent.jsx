import React from "react";
import CustomArrows from "../Components/Carousal";
import BasicUsage from "./Modal";

const Bodycontent = () => {
  const images1 = [
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-upcomingbrands-p2-aldo-upto60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-upcomingbrands-p2-aldo-upto60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-upcomingbrands-p4-wedani-min70.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-M-AllStars-upcomingbrands-p5-kazo-min50.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-upcomingbrands-p1-ketch-min60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1609-D-footwear-accessories-Home.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/1609-D-footwear-accessories-Formal-Shoes.jpg",
  ];
  const images2 = [
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-kidswear-p1-kgfrendz-riogirls-starting99.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-kidswear-p2-cutecumber-max-starting299.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-kidswear-p3-leecooper-uspa-starting399.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-kidswear-p4-biba-globaldesigirls-starting699.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-kidswear-p5-campus-skechers-starting249.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-kidswear-p6-performax-kgfrendz-starting299.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-kidswear-p7-disney-m&s-starting299.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-kidswear-p8-hamleys-mothercare-starting99.jpg",
  ];
  const images3 = [
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-westernwear-p1-trendyol-kazo-starting549.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-westernwear-p2-and-veromoda-starting240.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-westernwear-p3-m&s-pepejeans-starting799.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-westernwear-p4-edamama-mothercare-starting149.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-westernwear-p5-superdry-puma-min50.jpg",
  ];
  const images4 = [
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-exclusivebrands-p1-leecooper-upto70.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-exclusivebrands-p2-rio-starting249.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-exclusivebrands-p3-fig-under399.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-exclusivebrands-p4-denizen-30to60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-exclusivebrands-p5-muji-upto70.jpg",
  ];
  const ott_deals = [
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-omgdiscount-p1-min80.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-omgdiscount-p2-min70.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-omgdiscount-p3-min60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-omgdiscount-p4-under299.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-omgdiscount-p5-under399.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-omgdiscount-p6-under499.jpg",
  ];
  const showStopper = [
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-celebcollab-p1-aureliaxaliabhatt-40to60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-celebcollab-p1-aureliaxaliabhatt-40to60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-celebcollab-p3-pumaxkareenakapoor-30to60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-celebcollab-p5-levisxdeepikapadukone-starting2299.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-celebcollab-p6-laviexanushkasharma-upto70.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-celebcollab-p7-myglammxmanishmalhotra-upto40.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-celebcollab-p8-givaxshrutihassan-upto80.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-celebcollab-p9-capresextarasutaria-upto60.jpg",
  ];
  const wall_of_fame = [
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-morebrands-p1-iscenerybyveromoda-40to60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-morebrands-p2-bellacasa-upto80.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-morebrands-p3-coverstory-upto55.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-morebrands-p2-bellacasa-upto80.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-morebrands-p5-orchidblues-upto60.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-morebrands-p6-modax-upto30.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-morebrands-p7-kibo-upto70.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-morebrands-p8-cortina-upto80.jpg",
    "https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-morebrands-p9-zinklondon-min30.jpg",
  ];
  return (
    <div>
      <div>
        <CustomArrows images={images1} />
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-sponsorcarousel-sectionheader.jpg"
          alt=""
          className="moveitup"
        />
        <div>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-trendscarousel-p5-rio-fig-starting239.jpg"
            alt=""
          />
          <CustomArrows images={images2} />
        </div>

        <div style={{ marginTop: "300px" }}>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-ethnicwear-sectionheader.jpg"
            alt=""
          />
          <CustomArrows images={images3} />
        </div>
        <div style={{ marginTop: "300px", backgroundColor: "red" }}>
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-footwear&accessories-sectionheader.jpg"
            alt=""
          />
          <CustomArrows images={images4} />
        </div>
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-omgdiscount-sectionheader.jpg"
          alt=""
          style={{ marginTop: "300px" }}
        />
        <div className="grid-of-six">
          {ott_deals.map((item) => {
            return <img src={item} alt="" />;
          })}
        </div>
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-celebcollab-sectionheader.jpg"
          alt=""
        />
        <div>
          <CustomArrows images={showStopper} />
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-featuredbrands-sectionheader.jpg"
            alt=""
            style={{ marginTop: "300px" }}
          />
          <img
            src="https://assets.ajio.com/cms/AJIO/WEB/16092022-WHP-D-AllStars-featuredbrands-p1-ritkumar.jpg"
            alt=""
          />
        </div>
        <div className="grid-of-six">
          {wall_of_fame.map((item) => {
            return <img src={item} alt="" />;
          })}
        </div>
        <img
          src="https://assets.ajio.com/cms/AJIO/WEB/08032022-D-unisex-ajiocares-strip%20new%20d.jpg"
          alt=""
        />
      </div>

      <button className="open-modal-bottom"></button>
      <BasicUsage />
    </div>
  );
};

export default Bodycontent;
