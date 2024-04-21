import React from 'react'
import { useGetImagesQuery } from '../../../../hooks/useGetPropertyImages'
import "./ExploreCardImage.style.css"

const ExploreCardImage = ({id}) => {
    const {data, isLoading, isError} = useGetImagesQuery(id);

    if (isLoading) {return <div>Loading ...</div>};
    if (isError || !data?.data || data.data.length === 0) {return <div>No image available</div>}

  return (
    <div>
        <img className='explore-card-img' alt='Property image' src={data.data[0].link}/>
    </div>
  )
}

export default ExploreCardImage
