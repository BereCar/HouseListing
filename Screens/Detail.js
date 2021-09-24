import React from 'react';
import ListingDetail from '../Components/Listing/ListingDetail.android' 
//import ListingDetail from '../Components/Listing/ListingDetail.ios' 
const Detail = ({ navigation }) => {
  const item = navigation.getParam('item', {});

  return <ListingDetail item={item} />;
};

export default Detail;
