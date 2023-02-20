import { Product } from '@prisma/client'

export interface IProductPart extends Pick<Product, 'name' | 'images'> {}

export const products: IProductPart[] = [
	{
		name: 'Childhood Bucket Hat',
		images: ['/uploads/images/products/hat.png']
	},
	{
		name: 'Trf Wide Leg Jeans',
		images: ['/uploads/images/products/woman-jeans.png']
	},
	{
		name: 'Voluminous Cargo Jeans',
		images: ['/uploads/images/products/jeans-2.png']
	},
	{
		name: 'Reversible Cropped Vest',
		images: ['/uploads/images/products/sleeveless-jacket.png']
	},
	{
		name: 'Contrasting Sneakers',
		images: ['/uploads/images/products/trainers.png']
	},
	{
		name: 'Printed Hoodie',
		images: ['/uploads/images/products/hoodie.png']
	},
	{
		name: 'Faux Bomber Jacket',
		images: ['/uploads/images/products/bomber.png']
	},
	{
		name: 'Double-Handle Crossbody Bag',
		images: ['/uploads/images/products/woman-bag.png']
	},
	{
		name: 'T-Shirt With Contrast Print',
		images: ['/uploads/images/products/man-t-shirt.png']
	},
	{
		name: 'Striped Midi Dress With Belt',
		images: ['/uploads/images/products/woman-dress.png']
	},
	{
		name: 'Hooder Puffer Parka',
		images: ['/uploads/images/products/puffer-parka.png']
	}
]
