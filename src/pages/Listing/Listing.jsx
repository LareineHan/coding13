import React, { useEffect, useState } from "react";
import "./Listing.style.css";
import { Container, Row, Col } from "react-bootstrap";
import MapBox from "./components/MapBox/MapBox";
import FilterBar from "./components/FilterBar/FilterBar";
import { useSelector, useDispatch } from "react-redux";
import { toggleShowUserLocation } from "../../redux/reducers/getUserLocationSlice";
import ListingCard from "../../common/ListingCard/ListingCard";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useGetPropertiesQuery } from "../../hooks/useGetProperties";
const Listing = () => {
  const [query, setQuery] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const keyword = query.get("q");
  const userLocation = useSelector((state) => state.userLocation.userLocation);
  const searchPlace = useSelector((state) => state.searchPlace.searchPlace);
  const showUserLocation = useSelector(
    (state) => state.userLocation.showUserLocation
  );
  // Define initial search parameters
  const initialSearchParams = {
    location: showUserLocation ? userLocation : searchPlace?.name || "New York",
    minRent: "1000",
    maxRent: "8000",
    page: "1",
    sort: "default",
  };
  const [filter, setFilter] = useState(initialSearchParams);
  // Update filter when searchPlace or userLocation changes
  useEffect(() => {
    const newSearchParams = {
      ...filter,
      location: showUserLocation
        ? userLocation
        : searchPlace?.name || "New York",
    };
    setFilter(newSearchParams);
  }, [searchPlace, showUserLocation, userLocation, setFilter]);
  // Navigate when searchPlace changes
  useEffect(() => {
    if (searchPlace) {
      setQuery({ q: searchPlace.name });
      dispatch(toggleShowUserLocation(false));
    }
  }, [searchPlace, dispatch, setQuery]);
  useEffect(() => {
    if (Object.keys(filter).length === 0) {
      setFilter(initialSearchParams);
    }
  }, [filter, setFilter, initialSearchParams]);

  const { data, isLoading, isError } = useGetPropertiesQuery(filter);
  return (
    <div>
      <Container className='properties'>
        <Col>
          <Row className='property-filter-bar'>
            <FilterBar setFilter={setFilter} />
          </Row>
          <Row className='properties-content-container'>
            <Col className='properties-map-box'>
              <MapBox props={filter} />
            </Col>
            <Col className='property-listing scrollable-box'>
              <ListingCard searchParams={filter} />
            </Col>
          </Row>
        </Col>
      </Container>
    </div>
  );
};
export default Listing;
