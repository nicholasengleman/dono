import React, { useState } from "react";
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

  const [section , setSection] = useState(1);

  const onSubmit = (data) => {
    const variables = {
      ...data,
      price: parseInt(data.price),
      categoryId: 11,
      userId: parseInt(id),
    };

    addProduct({ variables, refetchQueries: [{ query: FETCH_PRODUCTS, variables: { id: parseInt(id) } }] });
    this.onClose();
  };

  const onClose = () => {
    setVisibility(false);
    reset();
    window.setTimeout(() => {
      setSection(1);
    }, 300)
  }

  return (
    <StyledAddProduct visibility={visibility}>
      <div className="form-header">
        <div className="text">
          <div className="title">New Product</div>
          <div className="subtitle">Fill out the information below to get started!</div>
        </div>
        <div className="close" onClick={onClose}>X</div>
      </div>
      <div className="form-sections">
        <button className={`section ${section === 1 ? 'selected' : ''}`} onClick={() => setSection(1)}>1. <span>Basic</span></button>
        <button className={`section ${section === 2 ? 'selected' : ''}`} onClick={() => setSection(2)}>2. <span>Contributions</span></button>
      </div>

      {section == 1 && <><div className="flex-container">
        <form className="form">
          <label htmlFor="name">Name</label>
          <input name="name" ref={register({ required: true })} />
          <label htmlFor="description">Description</label>
          <textarea name="description" type="" ref={register({ required: true })} />
          <label htmlFor="store">Store Link</label>
          <input name="store" type="" ref={register({ required: true })} />
        </form>
        <div className="image-upload">
            Image Upload
        </div>
      </div>
      <div className="tag-container-title">Tags</div>
      <div className="tag-container">
        <span className="tag">tag</span>
        <span className="tag">tag</span>
        <span className="tag">tag</span>
        <span className="tag">tag</span>
        <span className="tag">tag</span>
        <span className="tag">tag</span>
        <span className="tag">tag</span>
        <span className="tag">tag</span>
        <span className="tag">tag</span>
        <span className="tag">tag</span>
        <span className="tag">tag</span>
        </div></>}

        {section === 2 && <div className="contribution-detail-container">
          <form className="form">
            <label htmlFor="price">Price</label>
            <input name="price" type="number" className="short" ref={register({ requried: true })}/>
        </form>
        </div>
        }

      <div className="form-footer">
        <button className="btn cancel small" onClick={onClose}>cancel</button>
        {section == 1 && <button className="btn" onClick={() => setSection(2)}>Next Step</button>}
        {section == 2 && <button className="btn" onClick={handleSubmit(onSubmit)} >Submit</button>}
      </div>


     
    </StyledAddProduct>
  );
};

export default withApollo(addProduct);
