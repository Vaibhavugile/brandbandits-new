// src/data/products.js
// Single source of truth product data (20 products)
// Unified schema used by Hero, Trending, Product page, Swatches, Cart, etc.
//
// Fields per product:
// {
//   id, sku, name, tagline, description, category, price, compareAtPrice, discount,
//   rating, reviewsCount, currency, images:[], variants: [{id,label,hex,image,sku,stock}],
//   sizes:[], inventory, featured, tags:[], metadata:{weight_g,dimensions_cm}, createdAt
// }

const CREATED_AT = "2025-11-28T00:00:00.000Z";

export const PRODUCTS = [
  /* 1 */ {
    id: "meridian-shirt",
    sku: "BB-MER-SH-01",
    name: "Meridian Shirt",
    tagline: "A refined shirt for everyday elegance.",
    description:
      "Premium long-staple cotton with a balanced cut — wearable for both office and weekends.",
    category: "Shirts",
    price: 3499,
    compareAtPrice: 4299,
    discount: 19,
    rating: 4.6,
    reviewsCount: 248,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1519741494653-4a1f1f6b5906?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556228720-9a8b7f9a0a6b?q=80&w=1400&auto=format&fit=crop"
    ],
    variants: [
      { id: "navy", label: "Navy", hex: "#0f2740", image: "https://images.unsplash.com/photo-1519741494653-4a1f1f6b5906?q=80&w=400", sku: "BB-MER-SH-01-NV", stock: 34 },
      { id: "white", label: "White", hex: "#ffffff", image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400", sku: "BB-MER-SH-01-WT", stock: 48 },
      { id: "olive", label: "Olive", hex: "#6b8a3e", image: "https://images.unsplash.com/photo-1593032457860-5d39e2cae2a8?q=80&w=400", sku: "BB-MER-SH-01-OL", stock: 20 }
    ],
    sizes: ["S","M","L","XL"],
    inventory: 102,
    featured: true,
    tags: ["bestseller","classic","menswear"],
    metadata: { weight_g: 320, dimensions_cm: { w: 30, h: 40, d: 2 } },
    createdAt: CREATED_AT
  },

  /* 2 */ {
    id: "classic-oxford",
    sku: "BB-CLX-SH-02",
    name: "Classic Oxford Shirt",
    tagline: "Everyday polish with relaxed comfort.",
    description:
      "Durable oxford weave with a soft hand — a wardrobe essential for layered looks.",
    category: "Shirts",
    price: 2999,
    compareAtPrice: 3599,
    discount: 17,
    rating: 4.3,
    reviewsCount: 98,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1581639139535-fd04a797b0be?q=80&w=1400&auto=format&fit=crop"
    ],
    variants: [
      { id: "sky", label: "Sky Blue", hex: "#87b7e5", image: "https://images.unsplash.com/photo-1581639139535-fd04a797b0be?q=80&w=400", sku: "BB-CLX-SH-02-SK", stock: 26 },
      { id: "black", label: "Black", hex: "#000000", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=400", sku: "BB-CLX-SH-02-BK", stock: 12 }
    ],
    sizes: ["S","M","L","XL"],
    inventory: 38,
    featured: false,
    tags: ["workwear","everyday"],
    metadata: { weight_g: 300, dimensions_cm: { w: 30, h: 40, d: 2 } },
    createdAt: CREATED_AT
  },

  /* 3 */ {
    id: "ridge-trousers",
    sku: "BB-RID-TR-01",
    name: "Ridge Trousers",
    tagline: "Sculpted tailoring, effortless comfort.",
    description:
      "Tailored trousers with a four-way stretch weave for mobility and structure.",
    category: "Pants",
    price: 4199,
    compareAtPrice: 4999,
    discount: 16,
    rating: 4.4,
    reviewsCount: 156,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1526178613235-9d5e3d9d5c57?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560347876-aeef00ee58a1?q=80&w=1400&auto=format&fit=crop"
    ],
    variants: [
      { id: "charcoal", label: "Charcoal", hex: "#323232", image: "https://images.unsplash.com/photo-1526178613235-9d5e3d9d5c57?q=80&w=400", sku: "BB-RID-TR-01-CH", stock: 22 },
      { id: "khaki", label: "Khaki", hex: "#a3875a", image: "https://images.unsplash.com/photo-1593032465171-c77fa1f21a81?q=80&w=400", sku: "BB-RID-TR-01-KH", stock: 18 },
      { id: "beige", label: "Beige", hex: "#e0c9a6", image: "https://images.unsplash.com/photo-1549215169-5ddef7f91f7e?q=80&w=400", sku: "BB-RID-TR-01-BE", stock: 14 }
    ],
    sizes: ["30","32","34","36"],
    inventory: 54,
    featured: true,
    tags: ["tailoring","new"],
    metadata: { weight_g: 560, dimensions_cm: { w: 35, h: 42, d: 3 } },
    createdAt: CREATED_AT
  },

  /* 4 */ {
    id: "slim-denim",
    sku: "BB-SDM-PN-01",
    name: "Slim Fit Denim",
    tagline: "Crisp silhouette, comfortable wear.",
    description:
      "Medium-weight denim with tailored taper and stretch for everyday durability.",
    category: "Pants",
    price: 3799,
    compareAtPrice: 4299,
    discount: 11,
    rating: 4.2,
    reviewsCount: 84,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1400&auto=format&fit=crop"
    ],
    variants: [
      { id: "blue", label: "Blue", hex: "#1e3c64", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400", sku: "BB-SDM-PN-01-BL", stock: 28 },
      { id: "black", label: "Black", hex: "#0d0d0d", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=400", sku: "BB-SDM-PN-01-BK", stock: 16 }
    ],
    sizes: ["30","32","34","36"],
    inventory: 44,
    featured: false,
    tags: ["denim","casual"],
    metadata: { weight_g: 680, dimensions_cm: { w: 38, h: 44, d: 3 } },
    createdAt: CREATED_AT
  },

  /* 5 */ {
    id: "everyday-hoodie",
    sku: "BB-EVH-HO-01",
    name: "Everyday Hoodie",
    tagline: "Soft, structured, all-day comfort.",
    description:
      "Midweight loopback fleece that holds shape. Ideal as outer layer or mid-layer.",
    category: "Hoodies",
    price: 2999,
    compareAtPrice: 3499,
    discount: 14,
    rating: 4.1,
    reviewsCount: 67,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1520975917251-1f65b2a1f74b?q=80&w=1400&auto=format&fit=crop"
    ],
    variants: [
      { id: "navy", label: "Navy", hex: "#102542", image: "https://images.unsplash.com/photo-1520975917251-1f65b2a1f74b?q=80&w=400", sku: "BB-EVH-HO-01-NV", stock: 30 },
      { id: "grey", label: "Grey", hex: "#c4c4c4", image: "https://images.unsplash.com/photo-1556906781-9a4129618c01?q=80&w=400", sku: "BB-EVH-HO-01-GR", stock: 20 },
      { id: "olive", label: "Olive", hex: "#566246", image: "https://images.unsplash.com/photo-1602810317721-3bb90a4f70b7?q=80&w=400", sku: "BB-EVH-HO-01-OL", stock: 14 }
    ],
    sizes: ["S","M","L","XL"],
    inventory: 64,
    featured: true,
    tags: ["casual","comfortable"],
    metadata: { weight_g: 620, dimensions_cm: { w: 40, h: 52, d: 4 } },
    createdAt: CREATED_AT
  },

  /* 6 */ {
    id: "performance-hoodie",
    sku: "BB-PER-HO-01",
    name: "Performance Athleisure Hoodie",
    tagline: "Move freely, look sharp.",
    description:
      "Quick-dry performance knit built for run-to-coffee lifestyle with a structured hood.",
    category: "Hoodies",
    price: 3599,
    compareAtPrice: 3999,
    discount: 10,
    rating: 4.5,
    reviewsCount: 112,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1602810317721-3bb90a4f70b7?q=80&w=1400&auto=format&fit=crop"
    ],
    variants: [
      { id: "black", label: "Black", hex: "#000000", image: "https://images.unsplash.com/photo-1602810317721-3bb90a4f70b7?q=80&w=400", sku: "BB-PER-HO-01-BK", stock: 26 },
      { id: "teal", label: "Teal", hex: "#0f989d", image: "https://images.unsplash.com/photo-1556906781-9a4129618c01?q=80&w=400", sku: "BB-PER-HO-01-TE", stock: 12 }
    ],
    sizes: ["S","M","L","XL"],
    inventory: 38,
    featured: false,
    tags: ["performance","athleisure"],
    metadata: { weight_g: 540, dimensions_cm: { w: 38, h: 50, d: 3 } },
    createdAt: CREATED_AT
  },

  /* 7 */ {
    id: "atlas-jacket",
    sku: "BB-ATL-JK-01",
    name: "Atlas Jacket",
    tagline: "Lightweight armor — timeless silhouette.",
    description:
      "Wind-resistant jacket with breathable membrane and smart pocketing for the city commute.",
    category: "Jackets",
    price: 8499,
    compareAtPrice: 9999,
    discount: 15,
    rating: 4.7,
    reviewsCount: 312,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1572997494819-3b6f1f6a2b0c?q=80&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562158070-6f34d2c2f4a5?q=80&w=1400&auto=format&fit=crop"
    ],
    variants: [
      { id: "olive", label: "Olive", hex: "#4d5b2c", image: "https://images.unsplash.com/photo-1572997494819-3b6f1f6a2b0c?q=80&w=400", sku: "BB-ATL-JK-01-OL", stock: 18 },
      { id: "indigo", label: "Indigo", hex: "#223a70", image: "https://images.unsplash.com/photo-1562158070-6f34d2c2f4a5?q=80&w=400", sku: "BB-ATL-JK-01-IN", stock: 12 },
      { id: "sand", label: "Sand", hex: "#d8c9b2", image: "https://images.unsplash.com/photo-1572997494819-3b6f1f6a2b0c?q=80&w=400", sku: "BB-ATL-JK-01-SD", stock: 6 }
    ],
    sizes: ["S","M","L","XL"],
    inventory: 36,
    featured: true,
    tags: ["outerwear","premium"],
    metadata: { weight_g: 820, dimensions_cm: { w: 46, h: 60, d: 6 } },
    createdAt: CREATED_AT
  },

  /* 8 */ {
    id: "city-bomber",
    sku: "BB-CBM-JK-01",
    name: "City Bomber Jacket",
    tagline: "Street-ready volume with refined details.",
    description:
      "Cropped bomber silhouette with quilted lining and reinforced cuffs.",
    category: "Jackets",
    price: 7699,
    compareAtPrice: 8999,
    discount: 14,
    rating: 4.3,
    reviewsCount: 74,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1400&auto=format&fit=crop"
    ],
    variants: [
      { id: "navy", label: "Navy", hex: "#1a2640", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=400", sku: "BB-CBM-JK-01-NV", stock: 10 },
      { id: "grey", label: "Grey", hex: "#777777", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400", sku: "BB-CBM-JK-01-GR", stock: 8 }
    ],
    sizes: ["S","M","L","XL"],
    inventory: 18,
    featured: false,
    tags: ["street","limited"],
    metadata: { weight_g: 760, dimensions_cm: { w: 45, h: 58, d: 5 } },
    createdAt: CREATED_AT
  },

  /* 9 */ {
    id: "classic-leather-belt",
    sku: "BB-BEL-AC-01",
    name: "Classic Leather Belt",
    tagline: "Simple, strong, handsome.",
    description:
      "Full-grain leather belt with single-prong buckle — ages beautifully.",
    category: "Accessories",
    price: 1499,
    compareAtPrice: 1799,
    discount: 16,
    rating: 4.5,
    reviewsCount: 134,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c0c07?q=80&w=1200&auto=format&fit=crop"
    ],
    variants: [
      { id: "brown", label: "Brown", hex: "#5a3e1a", image: "https://images.unsplash.com/photo-1553062407-98eeb64c0c07?q=80&w=400", sku: "BB-BEL-AC-01-BR", stock: 40 },
      { id: "black", label: "Black", hex: "#111111", image: "https://images.unsplash.com/photo-1553062407-98eeb64c0c07?q=80&w=400", sku: "BB-BEL-AC-01-BK", stock: 30 }
    ],
    sizes: [],
    inventory: 70,
    featured: false,
    tags: ["accessory","leather"],
    metadata: { weight_g: 120, dimensions_cm: { w: 12, h: 3, d: 2 } },
    createdAt: CREATED_AT
  },

  /* 10 */ {
    id: "signature-wallet",
    sku: "BB-WAL-AC-01",
    name: "Signature Leather Wallet",
    tagline: "Minimal pockets, maximum polish.",
    description:
      "Slim bifold wallet in vegetable-tanned leather with RFID lining.",
    category: "Accessories",
    price: 1999,
    compareAtPrice: 2499,
    discount: 20,
    rating: 4.6,
    reviewsCount: 99,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop"
    ],
    variants: [
      { id: "tan", label: "Tan", hex: "#c49e63", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=400", sku: "BB-WAL-AC-01-TN", stock: 22 },
      { id: "brown", label: "Brown", hex: "#60492d", image: "https://images.unsplash.com/photo-1575932444877-4b92206e46b1?q=80&w=400", sku: "BB-WAL-AC-01-BR", stock: 18 }
    ],
    sizes: [],
    inventory: 40,
    featured: true,
    tags: ["gift","craft"],
    metadata: { weight_g: 85, dimensions_cm: { w: 11, h: 9, d: 1.5 } },
    createdAt: CREATED_AT
  },

  /* 11 */ {
    id: "oud-noir-parfum",
    sku: "BB-PFM-PF-01",
    name: "Oud Noir Parfum",
    tagline: "Dark, warm, unexpectedly modern.",
    description:
      "Concentrated eau de parfum with oud base, cedar heart and a citrus lift.",
    category: "Perfumes",
    price: 5599,
    compareAtPrice: 6599,
    discount: 15,
    rating: 4.8,
    reviewsCount: 210,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1bd?q=80&w=1200&auto=format&fit=crop"
    ],
    variants: [
      { id: "50ml", label: "50ml", hex: null, image: "https://images.unsplash.com/photo-1585386959984-a4155224a1bd?q=80&w=400", sku: "BB-PFM-PF-01-50", stock: 28 }
    ],
    sizes: [],
    inventory: 28,
    featured: true,
    tags: ["fragrance","luxury"],
    metadata: { weight_g: 250, dimensions_cm: { w: 6, h: 12, d: 6 } },
    createdAt: CREATED_AT
  },

  /* 12 */ {
    id: "citrus-musk",
    sku: "BB-PFM-PF-02",
    name: "Citrus Musk Eau de Toilette",
    tagline: "Bright, clean, everyday energy.",
    description:
      "Zesty citrus top notes balanced with soft musk and amber base for daily wear.",
    category: "Perfumes",
    price: 3299,
    compareAtPrice: 3799,
    discount: 13,
    rating: 4.2,
    reviewsCount: 58,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1595436068421-2f9ce2e03d75?q=80&w=1200&auto=format&fit=crop"
    ],
    variants: [
      { id: "50ml", label: "50ml", hex: null, image: "https://images.unsplash.com/photo-1595436068421-2f9ce2e03d75?q=80&w=400", sku: "BB-PFM-PF-02-50", stock: 20 }
    ],
    sizes: [],
    inventory: 20,
    featured: false,
    tags: ["fragrance","daily"],
    metadata: { weight_g: 220, dimensions_cm: { w: 6, h: 12, d: 6 } },
    createdAt: CREATED_AT
  },

  /* 13 */ {
    id: "summer-linen-shirt",
    sku: "BB-LIN-SH-01",
    name: "Summer Linen Shirt",
    tagline: "Airy weave, tailored finish.",
    description:
      "Lightweight linen with a soft finish — ideal for warm-weather layering.",
    category: "Shirts",
    price: 2799,
    compareAtPrice: 3299,
    discount: 15,
    rating: 4.0,
    reviewsCount: 44,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1400&auto=format&fit=crop"
    ],
    variants: [
      { id: "white", label: "White", hex: "#ffffff", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=400", sku: "BB-LIN-SH-01-WT", stock: 18 },
      { id: "sand", label: "Sand", hex: "#e6d8c6", image: "https://images.unsplash.com/photo-1572997494819-3b6f1f6a2b0c?q=80&w=400", sku: "BB-LIN-SH-01-SD", stock: 12 }
    ],
    sizes: ["S","M","L","XL"],
    inventory: 30,
    featured: false,
    tags: ["summer","light"],
    metadata: { weight_g: 260, dimensions_cm: { w: 30, h: 40, d: 2 } },
    createdAt: CREATED_AT
  },

  /* 14 */ {
    id: "weekender-tee",
    sku: "BB-WK-TT-01",
    name: "Weekender Tee",
    tagline: "Soft slub cotton for casual wear.",
    description:
      "Relaxed tee with a soft slub texture and reinforced seams — an everyday go-to.",
    category: "Shirts",
    price: 1299,
    compareAtPrice: 1599,
    discount: 19,
    rating: 4.0,
    reviewsCount: 72,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop"
    ],
    variants: [
      { id: "grey", label: "Grey", hex: "#d0d0d0", image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=400", sku: "BB-WK-TT-01-GR", stock: 40 },
      { id: "black", label: "Black", hex: "#111111", image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=400", sku: "BB-WK-TT-01-BK", stock: 26 }
    ],
    sizes: ["S","M","L","XL"],
    inventory: 66,
    featured: false,
    tags: ["casual","basic"],
    metadata: { weight_g: 180, dimensions_cm: { w: 28, h: 36, d: 2 } },
    createdAt: CREATED_AT
  },

  /* 15 */ {
    id: "tailored-blazer",
    sku: "BB-BLA-JK-01",
    name: "Tailored Blazer",
    tagline: "Sharp structure, soft comfort.",
    description:
      "Half-lined blazer with a modern narrow shoulder and soft interlining for movement.",
    category: "Jackets",
    price: 10999,
    compareAtPrice: 12999,
    discount: 15,
    rating: 4.6,
    reviewsCount: 58,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop"
    ],
    variants: [
      { id: "charcoal", label: "Charcoal", hex: "#2f3136", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400", sku: "BB-BLA-JK-01-CH", stock: 8 },
      { id: "navy", label: "Navy", hex: "#14263b", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=400", sku: "BB-BLA-JK-01-NV", stock: 6 }
    ],
    sizes: ["S","M","L","XL"],
    inventory: 14,
    featured: true,
    tags: ["formal","occasion"],
    metadata: { weight_g: 920, dimensions_cm: { w: 48, h: 62, d: 6 } },
    createdAt: CREATED_AT
  },

  /* 16 */ {
    id: "thermal-vest",
    sku: "BB-THM-VE-01",
    name: "Thermal Vest",
    tagline: "Warm core, no bulk.",
    description:
      "Lightweight thermal vest with insulating fill for layered cold-weather comfort.",
    category: "Jackets",
    price: 4599,
    compareAtPrice: 5299,
    discount: 13,
    rating: 4.1,
    reviewsCount: 36,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1562158070-6f34d2c2f4a5?q=80&w=1400&auto=format&fit=crop"
    ],
    variants: [
      { id: "black", label: "Black", hex: "#0b0b0b", image: "https://images.unsplash.com/photo-1562158070-6f34d2c2f4a5?q=80&w=400", sku: "BB-THM-VE-01-BK", stock: 12 },
      { id: "olive", label: "Olive", hex: "#4d5b2c", image: "https://images.unsplash.com/photo-1572997494819-3b6f1f6a2b0c?q=80&w=400", sku: "BB-THM-VE-01-OL", stock: 10 }
    ],
    sizes: ["S","M","L","XL"],
    inventory: 22,
    featured: false,
    tags: ["insulation","layering"],
    metadata: { weight_g: 420, dimensions_cm: { w: 42, h: 52, d: 4 } },
    createdAt: CREATED_AT
  },

  /* 17 */ {
    id: "weekend-sneakers",
    sku: "BB-SNK-FT-01",
    name: "Weekend Sneakers",
    tagline: "Versatile sole, dressed-up details.",
    description:
      "Low-profile sneakers with leather upper and flexible sole — all-day comfort.",
    category: "Accessories",
    price: 4999,
    compareAtPrice: 5999,
    discount: 16,
    rating: 4.4,
    reviewsCount: 86,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1400&auto=format&fit=crop"
    ],
    variants: [
      { id: "white", label: "White", hex: "#ffffff", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=400", sku: "BB-SNK-FT-01-WT", stock: 15 },
      { id: "black", label: "Black", hex: "#111111", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=400", sku: "BB-SNK-FT-01-BK", stock: 12 }
    ],
    sizes: ["7","8","9","10","11"],
    inventory: 27,
    featured: false,
    tags: ["footwear","casual"],
    metadata: { weight_g: 850, dimensions_cm: { w: 30, h: 12, d: 10 } },
    createdAt: CREATED_AT
  },

  /* 18 */ {
    id: "summer-chino",
    sku: "BB-CHN-PN-01",
    name: "Summer Chino",
    tagline: "Lightweight, smart-casual staple.",
    description:
      "Breathable cotton blend chino with a clean front and tapered leg.",
    category: "Pants",
    price: 3299,
    compareAtPrice: 3799,
    discount: 13,
    rating: 4.2,
    reviewsCount: 63,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1593032465171-c77fa1f21a81?q=80&w=1400&auto=format&fit=crop"
    ],
    variants: [
      { id: "khaki", label: "Khaki", hex: "#a3875a", image: "https://images.unsplash.com/photo-1593032465171-c77fa1f21a81?q=80&w=400", sku: "BB-CHN-PN-01-KH", stock: 20 },
      { id: "navy", label: "Navy", hex: "#0f2740", image: "https://images.unsplash.com/photo-1549215169-5ddef7f91f7e?q=80&w=400", sku: "BB-CHN-PN-01-NV", stock: 14 }
    ],
    sizes: ["30","32","34","36"],
    inventory: 34,
    featured: false,
    tags: ["summer","smart"],
    metadata: { weight_g: 520, dimensions_cm: { w: 36, h: 44, d: 3 } },
    createdAt: CREATED_AT
  },

  /* 19 */ {
    id: "coffee-kerchief",
    sku: "BB-ACC-01",
    name: "Coffee Kerchief",
    tagline: "Small detail, big effect.",
    description:
      "Silk-blend pocket square with refined print — elevates both jackets and casual blazers.",
    category: "Accessories",
    price: 799,
    compareAtPrice: 999,
    discount: 20,
    rating: 4.5,
    reviewsCount: 29,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1549215169-5ddef7f91f7e?q=80&w=1200&auto=format&fit=crop"
    ],
    variants: [
      { id: "print1", label: "Brown print", hex: null, image: "https://images.unsplash.com/photo-1549215169-5ddef7f91f7e?q=80&w=400", sku: "BB-ACC-01-PR1", stock: 45 }
    ],
    sizes: [],
    inventory: 45,
    featured: false,
    tags: ["accessory","gift"],
    metadata: { weight_g: 18, dimensions_cm: { w: 25, h: 25, d: 0.2 } },
    createdAt: CREATED_AT
  },

  /* 20 */ {
    id: "leather-weekender-bag",
    sku: "BB-BAG-AC-01",
    name: "Leather Weekender Bag",
    tagline: "Built for short trips and long impressions.",
    description:
      "Durable full-grain leather carryall with structured base and easy-access pockets.",
    category: "Accessories",
    price: 9999,
    compareAtPrice: 11999,
    discount: 16,
    rating: 4.7,
    reviewsCount: 42,
    currency: "INR",
    images: [
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1400&auto=format&fit=crop"
    ],
    variants: [
      { id: "tan", label: "Tan", hex: "#c49e63", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=400", sku: "BB-BAG-AC-01-TN", stock: 9 },
      { id: "brown", label: "Brown", hex: "#6e4b2a", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400", sku: "BB-BAG-AC-01-BR", stock: 6 }
    ],
    sizes: [],
    inventory: 15,
    featured: true,
    tags: ["travel","premium"],
    metadata: { weight_g: 2600, dimensions_cm: { w: 55, h: 30, d: 24 } },
    createdAt: CREATED_AT
  }
];

// Derived categories (array)
export const CATEGORIES = Array.from(
  new Set(PRODUCTS.map(p => p.category || "Other"))
);

// Helper: return sample products shaped like older SAMPLE_PRODUCTS if needed
export function getSampleProducts() {
  return PRODUCTS.map(p => ({
    id: p.id,
    name: p.name,
    price: p.price,
    category: p.category,
    variants: p.variants || [],
    images: p.images || []
  }));
}

// Helper: find product by id
export function findProductById(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}

/* ----------------------------------------
   CATEGORY HERO / EDITORIAL IMAGES
---------------------------------------- */

export const CATEGORY_IMAGES = {
  Shirts:
    "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=2400&auto=format&fit=crop",

  Pants:
    "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2400&auto=format&fit=crop",

  Hoodies:
    "https://images.unsplash.com/photo-1602810317333-5b8d9c8c5b6a?q=80&w=2400&auto=format&fit=crop",

  Jackets:
    "https://images.unsplash.com/photo-1601924638867-3ec9c6bfa2d8?q=80&w=2400&auto=format&fit=crop",

  Accessories:
    "https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=2400&auto=format&fit=crop",

  Perfumes:
    "https://images.unsplash.com/photo-1615634260167-c8cdede054de?q=80&w=2400&auto=format&fit=crop",

  Default:
    "https://images.unsplash.com/photo-1601924928585-9d64b5c6a8b4?q=80&w=2400&auto=format&fit=crop",
};


/* Helper */
export function getCategoryImage(category) {
  return CATEGORY_IMAGES[category] || CATEGORY_IMAGES.Default;
}

export default {
  PRODUCTS,
  CATEGORIES,
  CATEGORY_IMAGES,
  getCategoryImage,
  getSampleProducts,
  findProductById
};

