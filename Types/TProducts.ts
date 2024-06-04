export type TProdutes = {
  categories: [];
  category1: string;
  category2: string | null;
  categoryName: string;
  h1: string;
  metaDescription: string;
  metaTitle: string;
  popularSearches: [];
  products: [];
};

export type TProducts = {
  accessories: any[] | null;
  badgeIds: any[] | null;
  badges: any[] | null;
  barCode: string | null;
  bookingDateTo: string | null;
  brandName: string | null;
  brandPhotoUrl: string | null;
  breadcrumbs: any[] | null;
  bundleIsInCart: boolean;
  bundleRequestedQuantity: number | null;
  bundleTotalPreviousPrice: number | null;
  bundles: any[] | null;
  categoryId: number;
  categoryIds: any[] | null;
  categoryName: string | null;
  categoryRoute: string | null;
  description: string;
  disableBuyButton: boolean;
  discountAmount: number;
  discountPercent: number;
  discountType: string | null;
  doNotRecordStock: boolean;
  giftType: string | null;
  gifts: any[] | null;
  h1: string;
  hasDiscount: boolean;
  iconUrl: string | null;
  id: number;
  imageAlt: string | null;
  imageUrl: string;
  images: any[] | null;
  isBooked: boolean;
  isFavorite: boolean;
  isInCart: boolean;
  isKyosk: boolean;
  isNightPromotion: boolean;
  isPriceSubscribed: boolean;
  isPurchased: boolean;
  isStockSubscribed: boolean;
  keySpecification: string | null;
  labelColor: string | null;
  labelText: string | null;
  mainSpecification: string | null;
  maxQuantityInCart: number | null;
  metaDescription: string;
  metaTitle: string;
  metaUrlName: string;
  name: string;
  onSale: boolean;
  onSaleSoon: boolean;
  orderNo: number;
  parentCategoryName: string;
  preSalePrice: number | null;
  previousPrice: number | null;
  price: number;
  promotionFinishDate: string | null;
  promotionQuantity: number;
  releaseDate: string | null;
  requestedQuantity: number;
  route: string;
  routeIsNotValid: boolean | null;
  sellType: string;
  shareRoute: string | null;
  shopId: number;
  shopName: string | null;
  similarProductsList: any[] | null;
  specificationGroup: string | null;
  storageQuantity: number;
  subCategoryId: number;
  subCategoryName: string | null;
  videoUrls: string[] | null;
};
