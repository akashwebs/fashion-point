import { useQuery } from "react-query";
import { products } from "../../../../lib/helper";
import DiscountProductItem from "./DiscountProductItem";


const DiscountProducts = () => {
    const { data, isLoading, refetch } = useQuery(["products"], products);

    // console.log(data.data)


    const product = data?.data?.reverse()

    return (
        <>
            <div className="py-10">
                <div className="mid-container">
                    <div className='mb-7 mx-auto md:w-[600px]'>
                        <div className="text-center">
                            <h1 className='text-2xl font-semibold'>Latest Discounted Products</h1>
                            <p className=' text-neutral'>See Our latest discounted products below. Choose your daily needs from here and get a special discount with free shipping.</p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
                        {
                            product?.map((item) => <DiscountProductItem
                                key={item.id}
                                product={item}
                            ></DiscountProductItem>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default DiscountProducts;