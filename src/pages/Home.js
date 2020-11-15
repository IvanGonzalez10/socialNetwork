import React from "react";
import { ListOfCategories } from "../components/ListOfCategories";
import { ListOfPhotoCards } from "../components/ListOfPhotoCards";
import { Helmet } from 'react-helmet';

export const Home = ({ id }) => {
  return (
    <>
      <Helmet>
        <title>Petgram: App de fotos de mascotas</title>
        <meta name='description' content='En petgram veras las fotos de animales domesticos más cool' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  );
};
