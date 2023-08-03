import Image from "next/image";
import Link from "next/link";

export default function CountryCard({name, ptName, flag, flagAlt}: {
    name: string;
    ptName: string;
    flag: string;
    flagAlt: string;
  }){
    return(
        <Link key={name} href={`/pais/${name}`}>
            <article className='h-64 min-w-full p-2 bg-white border-2 rounded-xl  hover:border-gray-500 transition-all hover:shadow-xl' key={name}>
            <div className='relative w-full h-40 p2 overflow-hidden rounded-xl'>
              <Image className='object-cover' src={flag} alt={flagAlt} fill/>
            </div>
            <h1 className="font-bold text-xl text-center mt-1"></h1>
            {ptName}
            </article>
          </Link>
    )
}