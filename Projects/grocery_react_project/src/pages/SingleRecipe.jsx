import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { set, useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setData } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      desc: recipe?.desc,
      category: recipe?.category,
      inst: recipe?.inst,
      ingr: recipe?.ingr,
    },
  });

  const updateHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setData(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe Updated!");
  };

  const deleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setData(filterdata);
    localStorage.setItem("recipes", JSON.stringify(filterdata));
    toast.success("Recipe Deleted!");
    navigate("/recipes");

    // also delete from favorite (if in favorite)
    const fav = JSON.parse(localStorage.getItem("fav"));
    const filterFav = fav.filter((r) => r.id != params.id);
    localStorage.setItem("fav", JSON.stringify(filterFav));
  };

  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem("fav")) || []
  );

  const favHandler = () => {
    const copyFav = [...favorite]
    copyFav.push(recipe);
    localStorage.setItem("fav", JSON.stringify(copyFav));
    setFavorite(copyFav);
  };

  const unFavHandler = () => {
    const filterFav = favorite.filter((f) => f.id != recipe?.id);
    setFavorite(filterFav);
    localStorage.setItem("fav", JSON.stringify(filterFav));
  };

  useEffect(() => {
    console.log("SingleRecipe.jsx Mounted");

    return () => {
      console.log("SingleRecipe.jsx Unmounted");
    };
  }, [favorite]);

  return recipe ? (
    <div className="w-full flex">
      <div className="relative left w-1/2 p-10">
        {favorite.find((f) => f.id == recipe?.id) ? (
          <i
            onClick={unFavHandler}
            className="right-[5%] absolute text-3xl text-red-400 ri-heart-fill"
          ></i>
        ) : (
          <i
            onClick={favHandler}
            className="right-[5%] absolute text-3xl text-red-400 ri-heart-line"
          ></i>
        )}

        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <img className="h-[20vh]" src={recipe.image} alt="" />
        <h1>{recipe.chef}</h1>
        <p>{recipe.desc}</p>
      </div>
      <form className="w-1/2 p-2" onSubmit={handleSubmit(updateHandler)}>
        <input
          className="block border-b outline-0 p-2"
          {...register("image")}
          type="url"
          placeholder="Enter image url"
        />
        <small className="text-red-400">This is how the error is shown.</small>
        <input
          className="block border-b outline-0 p-2"
          {...register("title")}
          type="text"
          placeholder="Recipe Title"
        />
        {/* <small className='text-red-400'>This is how the error is shown.</small> */}
        <input
          className="block border-b outline-0 p-2"
          {...register("chef")}
          type="text"
          placeholder="Chef Name"
        />
        {/* <small className='text-red-400'>This is how the error is shown.</small> */}
        <textarea
          className="block border-b outline-0 p-2"
          {...register("desc")}
          placeholder="Recipe Description"
        />
        {/* <small className='text-red-400'>This is how the error is shown.</small> */}
        <textarea
          className="block border-b outline-0 p-2"
          {...register("ingr")}
          placeholder="// write ingredients seperated by comma"
        />
        {/* <small className='text-red-400'>This is how the error is shown.</small> */}
        <textarea
          className="block border-b outline-0 p-2"
          {...register("inst")}
          placeholder="// write instructions seperated by comma"
        />
        {/* <small className='text-red-400'>This is how the error is shown.</small> */}
        <select
          className="block border-b outline-0 p-2"
          {...register("category")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>
        <button className="block mt-5 bg-blue-900 px-4 py-2 rounded">
          Update Recipe
        </button>
        <button
          onClick={deleteHandler}
          className="block mt-5 bg-red-900 px-4 py-2 rounded"
        >
          Delete Recipe
        </button>
      </form>
    </div>
  ) : (
    "Loading..."
  );
};

export default SingleRecipe;
