import {
  collection,
  getDocs,
  limit,
  query,
  startAfter,
  where,
} from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const loadCategories = async () => {
  const collectionRef = collection(FirebaseDB, "/categories/");
  const docs = await getDocs(collectionRef);
  const categories = [];
  docs.forEach((category) => {
    categories.push({ id: category.id, ...category.data() });
  });
  return categories;
};
export const loadProducts = async () => {
  const collectionRef = collection(FirebaseDB, "/products/");
  const docs = await getDocs(collectionRef);
  const products = [];
  docs.forEach((product) => {
    products.push({ id: product.id, ...product.data() });
  });
  return products;
};
export const loadBranches = async () => {
  const collectionRef = collection(FirebaseDB, "/branches/");
  const docs = await getDocs(collectionRef);
  const branches = [];
  docs.forEach((branch) => {
    branches.push({ id: branch.id, ...branch.data() });
  });
  return branches;
};
export const loadSuppliers = async () => {
  const collectionRef = collection(FirebaseDB, "/suppliers/");
  const docs = await getDocs(collectionRef);
  const suppliers = [];
  docs.forEach((supplier) => {
    suppliers.push({ id: supplier.id, ...supplier.data() });
  });
  return suppliers;
};
export const loadPosts = async () => {
  const collectionRef = collection(FirebaseDB, "/posts/");
  const docs = await getDocs(collectionRef);
  const posts = [];
  docs.forEach((post) => {
    posts.push({ id: post.id, ...post.data() });
  });
  return posts;
};
export const loadBanners = async () => {
  const collectionRef = collection(FirebaseDB, "/banners/");
  const docs = await getDocs(collectionRef);
  const banners = [];
  docs.forEach((banner) => {
    banners.push({ id: banner.id, ...banner.data() });
  });
  return banners;
};
export const loadPromos = async () => {
  const collectionRef = collection(FirebaseDB, "/promos/");
  const docs = await getDocs(collectionRef);
  const promos = [];
  docs.forEach((promo) => {
    promos.push({ id: promo.id, ...promo.data() });
  });
  return promos;
};

export const loadPaginationProducts = async (pageSize, lastDoc) => {
  try {
    let queryRef;

    if (lastDoc) {
      queryRef = query(
        collection(FirebaseDB, "/products/"),
        startAfter(lastDoc),
        limit(pageSize)
      );
    } else {
      queryRef = query(collection(FirebaseDB, "/products/"), limit(pageSize));
    }

    const docs = await getDocs(queryRef);
    const products = [];

    docs.forEach((product) => {
      products.push({ id: product.id, ...product.data() });
    });

    // Devolver solo el ID del último documento, si está presente
    const lastDocId = lastDoc ? lastDoc.id : null;

    return { products, lastDocId }; // Devolver solo el ID del último documento
  } catch (error) {
    console.error("Error al cargar los productos paginados:", error);
    throw error;
  }
};

export const loadDiscountedProducts = async () => {
  const queryRef = query(
    collection(FirebaseDB, "/products/"),
    where("discount", "!=", "")
  );
  const docs = await getDocs(queryRef);
  const products = [];
  docs.forEach((product) => {
    products.push({ id: product.id, ...product.data() });
  });
  return products;
};
