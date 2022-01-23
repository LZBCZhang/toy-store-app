import React, {useState} from "react";
import Combobox from "../combobox/Combobox";
import ProductListGroup from "./ProductListGroup";

const ClientTypesInput : React.FC = () => {

    const [searchTerm, setSearchTerm] = useState<string>();
    const [productList, setProductList] = useState<ProductList[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [productSelected, setProductSelected] = useState<ProductList| null>(null);

    return (
        <Combobox
            onValueChanged={handleSearchTerm}
            searchTerm={searchTerm}
            onUnSelect={handleOnUnSelect}
            displayDropdown={displayDropdown}
            size={"md"}
            renderListGroup={()=> (
            <ProductListGroup
              categories={categories}
              productList={productList}
              onProductCategorySelection={handleProductCategorySelection}
              onProductSelected={handleProductSelection}
            />
        )} />
    );
};

export default ClientTypesInput;