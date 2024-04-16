import React from "react";
import "./PropertyImages.style.css";
import { useGetImagesQuery } from "../../hooks/useGetPropertyImages";
import { Image } from "react-bootstrap";

const PropertyImages = ({ id }) => {
  const { data, isLoading, isError } = useGetImagesQuery(id);
  console.log("property images:", data);

  if (isLoading) {
    return <div>Loading images...</div>;
  }

  if (isError) {
    return <div>Error fetching images: {isError.message}</div>;
  }

  return (
    <div>
      {data?.data.map((image, i) => (
        <div key={i}>
          <Image
            src={image.link}
            alt="Property Image"
            className="property-imag"
          />
          {/* <p>
            Virtual Tour:{" "}
            <a
              href={image.virtualTourLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {image.virtualTourLink}
            </a>
          </p> */}
        </div>
      ))}
    </div>
  );
};

export default PropertyImages;
