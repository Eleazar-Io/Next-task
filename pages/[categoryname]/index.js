import Link from 'next/link'
import { useRouter } from "next/router"

function CategoryDetail({data}){
    const router = useRouter()
    //console.log(router);
    // console.log(data);
    return(
        <div>
            <h1>{router.query.categoryname}</h1>
            {
                data.meals.map(category=>(
                    <div key = {category.idMeal}>
                        <Link href="/[categoryname]/[id]" as={`${router.query.categoryname}/${category.idMeal}`}>{category.strMeal}</Link>
                    </div>
                ))
            }
        </div>
    )
}

export async function getServerSideProps(context) {
    console.log(context);
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${context.params.categoryname}`)
    const data = await res.json()
    // Pass data to the page via props
    return { props : { data } }
  }

export default CategoryDetail