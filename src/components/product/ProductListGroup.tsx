import React, {useCallback, useState} from "react";
import ListGroupRow from "../listGroup/ListGroupRow";
import ListGroupColumn from "../listGroup/ListGroupColumn";
import {ListGroupItem} from "react-bootstrap";
import ListGroup from "../listGroup/ListGroup";

interface ProductListGroupProps {
    productList: ProductList[];
    categories: ProductCategories[];
    onProductCategorySelection: (productCategoryId: string) => void;
    onProductSelected: (productItem: string) => void;
}

const ProductTypesListGroup : React.FC<ProductListGroupProps> = ({productList, categories, onProductSelected, onProductCategorySelection}) => {
  const [productItem, setProductItem] = useState<ProductList|null>(null);
  const [displayDescription, setDisplayDescription] = useState(false);
  const setDescriptionHandle = useCallback((id: string, display:boolean) => {
     const item = productList.find(ct => ct.id === id);
     if(item) {
         setProductItem(item);
         setDisplayDescription(display);
     }
  }, [productList]);

  return (
      <ListGroup>
          <ListGroupRow>
              <ListGroupColumn colSize={4}>
                  {
                      categories.map(category =>
                      <ListGroupItem
                          key={category.id}
                          id={category.id}
                          label={category.label}
                          selected={category.selected}
                          onSelectionChange={onProductCategorySelection}
                          isGroupItem={true} />
                      )
                  }
              </ListGroupColumn>
              <ListGroupColumn colSize={8}>
                  {
                      productList.map(product => <ListGroupItem
                              key={product.id}
                              id={product.id}
                              label={product.label}
                              selected={product.selected}
                              onSelectionChange={onProductSelected}
                              isGroupItem={false}
                              />
                        )
                  }
              </ListGroupColumn>
          </ListGroupRow>
          {
              productItem && displayDescription && <ListGroupRow>
                  <ListGroupColumn colSize={12} borderLeft={true} borderRight={true}>
                      <div className={"border-top p-2"}>
                          <span>
                              {productItem.description}
                          </span>
                      </div>
                  </ListGroupColumn>
              </ListGroupRow>
          }
      </ListGroup>
  )

};

export default ProductTypesListGroup;