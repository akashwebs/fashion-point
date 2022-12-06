import Image from 'next/image';

import { products } from '../../../../lib/helper';
import { useQuery } from 'react-query';

const Category = () => {
    const { data, isLoading, refetch } = useQuery(["products"], products);

    let content
    if (isLoading) {
        content = <div className="text-center">Loading...</div>
    } else {
        content =  data?.data?.map((item) =>
        <div key={item?.id} className='text-center border-[1px] p-5 hover:shadow-md duration-100 bg-base-100' >
            <div className='rounded w-full h-32 mb-2 overflow-hidden'>
                <Image
                    src={item?.imageURLs[0]}
                    alt="Picture"
                    width={500}
                    height={500}
                    className="rounded-t-md object-cover h-full"    
                />
                {/* <img src={item?.imageURLs} alt=""/> */}
            </div>
            <h2 className=' text-sm'>{item.name}</h2>
        </div>
    )
    }
    
    return (
        <div className='sm:py-10  py-5'>
            <div className='mid-container'>
                <div className='mb-7 text-center'>
                    <h1 className='text-2xl font-semibold'>Featured Categories</h1>
                    <p className=' text-neutral'>Choose your necessary products from this feature categories.</p>
                </div>
                <div className='grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-2  gap-2 '>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Category;