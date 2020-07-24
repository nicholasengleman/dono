import React from "react";
import StyledAddProduct from "./addProductStyles";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import withApollo from "../../lib/withApollo";
import ADD_PRODUCT from "../../queries/addProduct";
import FETCH_PRODUCTS from "../../queries/fetchProducts";

const addProduct = ({ visibility, setVisibility }) => {
  const router = useRouter();
  const { id } = router.query;
  const { register, handleSubmit, reset } = useForm();
  const [addProduct, { data }] = useMutation(ADD_PRODUCT);

  const onSubmit = (data) => {
    const variables = {
      ...data,
      price: parseInt(data.price),
      categoryId: 11,
      userId: parseInt(id),
    };

    addProduct({ variables, refetchQueries: [{ query: FETCH_PRODUCTS, variables: { id: parseInt(id) } }] });
    setVisibility(false);
    reset();
  };

  return (
    <StyledAddProduct visibility={visibility}>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <label htmlFor="name">Name</label>
        <input name="name" ref={register({ required: true })} />
        <label htmlFor="price">Price</label>
        <input name="price" type="number" ref={register({ requried: true })} />
        <label htmlFor="store">Store</label>
        <input name="store" type="" ref={register({ required: true })} />
        <label htmlFor="description">Description</label>
        <input name="description" type="" ref={register({ required: true })} />
        <input type="submit" />
      </form>
    </StyledAddProduct>
  );
};

export default withApollo(addProduct);
