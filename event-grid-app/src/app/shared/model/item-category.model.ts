import { ProductItemBaseModel } from './product-item-base.model';

export interface ItemCategoryModel{
  userId ?: string;
  itemCategoryId ?: string;
  itemCategoryName ?: string;
  supplierCategoryItem ?: ProductItemBaseModel;
}
