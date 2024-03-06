import Image from 'next/image'
import Layout from '../component/layout';

export default function New(){
    return(
    <div>
        <Layout></Layout>
        <Image width={1000}
      height={900}
      alt="Picture of the author" src='https://res.cloudinary.com/de4fshmbt/image/upload/v1681780313/samples/animals/three-dogs.jpg'></Image>
    </div>
    )
    
}