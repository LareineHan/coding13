import React from 'react'
import { useGetImagesQuery } from '../../../../hooks/useGetPropertyImages'

const ExploreCardImage = ({id}) => {
    const {data, isLoading, isError} = useGetImagesQuery(id);

    if (isLoading) {return <div>Loading ...</div>};
    if (isError || !data?.data || data.data.length === 0) {return <div>No image available</div>}

  return (
    <div>
        <img style={{width: "288px", height: "200px", borderTopLeftRadius: "5px", borderTopRightRadius: "5px"}} alt='Property image' src={data.data[0].link}/>
    </div>
  )
}

export default ExploreCardImage
