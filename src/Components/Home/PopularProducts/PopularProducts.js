import { useQuery } from "react-query";
import { products } from "../../../../lib/helper";
import PopularProductsItem from "./PopularProductsItem";

const PopularProducts = () => {
    const { data, isLoading, refetch } = useQuery(["products"], products);

    // console.log(data.data)

    return (
        <>
            <div className=" py-10 bg-accent">
                <div className="mid-container">
                    <div className='mb-7 mx-auto md:w-[600px]'>
                        <div className="text-center">
                            <h1 className='text-2xl font-semibold'>Popular Products</h1>
                            <p className=' text-neutral'>See all our popular products in this week. You can choose your daily needs products from this list and get some special offer with free shipping.</p>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3">
                        {
                            data?.data?.map((item) => <PopularProductsItem
                                key={item.id}
                                product={item}
                            ></PopularProductsItem>)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};



export default PopularProducts;