import { useRouter } from "next/router";
import CardDetail from "../../components/templates/CardDetail";

const BASE_URL = process.env.BASE_URL;

const MenuId = ({ food }) => {
    const router = useRouter();
    if(router.isFallback){
        return <h3> is loading...</h3>
    }

  return <CardDetail food={food} />
};

export default MenuId;

export const getStaticPaths = async () => {
  const res = await fetch(`${BASE_URL}/data`);
  const data = await res.json();
  const slicedData = data.slice(0, 10);

  const paths = slicedData.map((item) => ({
    params: { menuId: item.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const {
    params: { menuId },
  } = context;

  const res = await fetch(`${BASE_URL}/data/${menuId}`);
  const data = await res.json();
 
  if(!data.id) {
    return {
      notFound: true
    }
  }

  return {
    props: {food: data},
    revalidate: +process.env.REVALIDATE,
  };
};
