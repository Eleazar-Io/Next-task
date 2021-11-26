import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image';

function Page({ data }) {
    const router = useRouter()
    // console.log(router)
    // console.log(data);
    return (
      <div>
        {
          data.categories.map(themeal=>(
            <div key = {themeal.strCategory}>
              <h3><Link href="/[categoryname]" as={`/${themeal.strCategory}`}>{themeal.strCategory}</Link></h3>
              <Link href="/[categoryname]" as={`/${themeal.strCategory}`}><img src={themeal.strCategoryThumb}/></Link>
            </div>
          ))
        }
      </div>
    )
  }  
  // This gets called on every request
  export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
  }
  
  export default Page