import { ProductList } from "./ProductList";

 const Products = async (props)=>{
    const searchParam = await props.searchParams;
    console.log("outer:", searchParam);
    
    return(
        <>
        <ProductList/>
        showing products {searchParam.catagory} ,where products id is = {searchParam.id} and price sorted in {searchParam.sort_price}</>
    )
}
export default Products;