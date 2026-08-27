export type FilterOption = {
  value: string
  label: string
  checked: boolean
}

export type FilterSection = {
  id: string
  name: string
  options: FilterOption[]
}

export const filters: FilterSection[] = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'tees', label: 'Tees', checked: false },
      { value: 'crewnecks', label: 'Crewnecks', checked: false },
      { value: 'hats', label: 'Hats', checked: false },
      { value: 'bundles', label: 'Bundles', checked: false },
      { value: 'carry', label: 'Carry', checked: false },
      { value: 'objects', label: 'Objects', checked: false },
    ],
  },
  {
    id: 'brand',
    name: 'Brand',
    options: [
      { value: 'clothing-company', label: 'Clothing Company', checked: false },
      { value: 'fashion-inc', label: 'Fashion Inc.', checked: false },
      { value: 'shoes-n-more', label: "Shoes 'n More", checked: false },
      { value: 'supplies-n-stuff', label: "Supplies 'n Stuff", checked: false },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'black', label: 'Black', checked: false },
      { value: 'grey', label: 'Grey', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'olive', label: 'Olive', checked: false },
      { value: 'tan', label: 'Tan', checked: false },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'xs', label: 'XS', checked: false },
      { value: 's', label: 'S', checked: false },
      { value: 'm', label: 'M', checked: false },
      { value: 'l', label: 'L', checked: false },
      { value: 'xl', label: 'XL', checked: false },
      { value: '2xl', label: '2XL', checked: false },
    ],
  },
]
