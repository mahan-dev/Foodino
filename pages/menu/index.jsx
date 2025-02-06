import React from "react";
import Menu from "../../components/templates/Menu";

const MenuPage = ({ data }) => {
  return <Menu data={data} />;
};

export default MenuPage;

const BASE_URL = process.env.BASE_URL;
export const getStaticProps = async () => {
  const res = await fetch(`${BASE_URL}/data`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: +process.env.REVALIDATE,
  };
};
