-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "volume" TEXT NOT NULL,
    "BPOM" TEXT NOT NULL,
    "image_src" TEXT NOT NULL,
    "image_alt" TEXT NOT NULL,
    "desc_promo" TEXT NOT NULL,
    "desc_general" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);
