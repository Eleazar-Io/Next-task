import Link from 'next/link'
import { useRouter } from "next/router"

function Meal({data}){
    const router = useRouter()
    // console.log(router);
    console.log(data);
    return(
        <div>
            <h5>{router.query.categoryname}</h5>
            {
                data.meals.map(meal=>(
                    <div key = {meal.idMeal}>
                        <h1>{meal.strMeal}</h1>
                        <h4>Tags : {meal.strTags}</h4>
                        <img src={meal.strMealThumb} alt="" />
                        <iframe src={`https://www.youtube.com/embed/${meal.strYoutube.split("=")[1]}`} frameBorder="0" width="500" height="300"></iframe>  
                        <h4>Country :</h4>
                        <p>{meal.strArea}</p>
                        <h4>How to :</h4>
                        <p>{meal.strInstructions}</p>
                        <h4>Source: </h4>
                        <a href={meal.strSource}>{meal.strSource}</a>
                    </div>
                ))
            }
        </div>
    )
}

export async function getServerSideProps(context) {
    console.log(context);
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${context.params.id}`)
    const data = await res.json()
    // Pass data to the page via props
    return { props : { data } }
  }

export default Meal