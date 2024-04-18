import React, { useState, useEffect } from "react";
import "./PropertyDetailPage.style.css";
import { useGetPropertyDetailQuery } from "../../hooks/useGetPropertyDetail";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import PropertyReviews from "../../common/PropertyReviews/PropertyReviews";
import { useGetImagesQuery } from "../../hooks/useGetPropertyImages";
import PropertyCarousel from "../../common/Carousel/PropertyCarousel";
import { useGetReviewsQuery } from "../../hooks/useGetReviews";
import PropertyRating from "../../common/PropertyRating/PropertyRating";
import PropertyPricing from "./components/PropertyPricing";
import Contact from "./components/Contact";
import Amenities from "./components/Amenities";
import FeesPolicies from "./components/FeesPolicies";
import PropertyDetails from "./components/PropertyDetails";
import Transportation from "./components/Transportation";

const PropertyDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error, isError } = useGetPropertyDetailQuery(id);
  const { data: imageData } = useGetImagesQuery(id);
  const { data: reviewsData } = useGetReviewsQuery(id);

  const [selectedTab, setSelectedTab] = useState(null);

  useEffect(() => {
    // Set the default selected tab when data or availabilities change
    if (data && data.availabilities && data.availabilities.length > 0) {
      setSelectedTab(data.availabilities[0].type); // Select the type of the first availability
    }
  }, [data]);

  console.log("PropertyDetailData", data);
  console.log("PropertyDetailData", reviewsData);

  if (isLoading) {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Loading...</h1>
          </Col>
        </Row>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Error: {error.message}</h1>
          </Col>
        </Row>
      </Container>
    );
  }

  // Destructure the data object to access specific properties
  const {
    name,
    rentRange,
    bedRange,
    bathRange,
    address,
    description,
    contact,
    amenities,
    availabilities,
    recurringExpenses,
    leaseTerms,
    yearBuilt,
    unitCount,
    storyCount,
    isFurnished,
    transits,
  } = data; // Access nested data

  const images = imageData?.data;
  const reviews = reviewsData?.data;

  const handleTabSelect = (type) => {
    setSelectedTab(type);
  };

  //Calculate average rating based on total reviews of property
  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;

    const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
    return totalRating / reviews.length;
  };

  const averageRating = calculateAverageRating();

  const totalReviews = reviews.length; //total number of reviews

  return (
    <Container>
      <PropertyCarousel images={images} />
      <h1>{name}</h1>
      <p>
        {`${address.lineOne}, ${address.city}, ${address.state} ${address.postalCode}`}
      </p>

      <PropertyRating
        averageRating={averageRating}
        totalReviews={totalReviews}
      />

      <div className="rent-bed-bath-range-container">
        <div className="rent-bed-bath-range-inner-container">
          <p className="rent-range-title">Rent Range</p>
          <p className="rent-range-value">{rentRange}</p>
        </div>

        <div className="rent-bed-bath-range-inner-container">
          <p className="bed-range-title">Bed Range</p>
          <p className="bed-range-value">{bedRange}</p>
        </div>

        <div className="rent-bed-bath-range-inner-container">
          <p className="bath-range-title">Bath Range</p>
          <p className="bath-range-value">{bathRange}</p>
        </div>
      </div>

      <PropertyPricing
        availabilities={availabilities}
        selectedTab={selectedTab}
        onTabSelect={handleTabSelect}
      />

      <div>
        <h2>About {name}</h2>
        <p>{description}</p>
      </div>

      <Contact contact={contact} />

      <Amenities amenities={amenities} />

      <FeesPolicies data={data} />

      <PropertyReviews id={id} />

      <PropertyDetails
        recurringExpenses={recurringExpenses}
        leaseTerms={leaseTerms}
        yearBuilt={yearBuilt}
        unitCount={unitCount}
        storyCount={storyCount}
        isFurnished={isFurnished}
      />

      <Transportation transits={transits} />
    </Container>
  );
};

export default PropertyDetailPage;
