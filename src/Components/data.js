const data = {
    productData: [
        {
            id: 1,
            img: "https://images.samsung.com/es/smartphones/galaxy-s21/buy/02_ImageCarousel/01_FamilyShot/S21_Family_KV_MO_img.jpg",
            title : 'Samsung S20',
            desc : 'Black Samsung S20', 
            price : 899,
            path : 'S20',
            category : 'phone'
        },

        {
            id: 2,
            img: "https://sc04.alicdn.com/kf/H708540fdfa90484f86ab9a043873e629G.jpg",
            title : 'Baby Cart',
            desc : 'Gray Baby Cart', 
            price : 64,
            path : 'babyCart',
            category : 'Baby Products'
        }, 
 
        {
            id: 3,
            img: "https://muynuevo.com/wp-content/webpc-passthru.php?src=https://muynuevo.com/wp-content/uploads/GOLD-1-1.png&nocache=1",
            title : 'Iphone 11',
            desc : 'Golden Iphone 11', 
            price : 659,
            path : 'Iphone11pmax',
            category : 'phone'
        },

        {
            id: 4,
            img: "https://b282c5de4f50ed30d5ce-25e9f6b52714e6c3d4dbb7e330152014.ssl.cf3.rackcdn.com//siweb_uno_thumb_medium/content/781356/3310-DS_2.jpg",
            title : 'Nokia 3320',
            desc : 'Nokia 3320 Black', 
            price : 60.95,
            path : 'nokia3320',
            category : 'phone'
        },

        {
            id: 5,
            img: "https://images.sportsdirect.com/images/products/45125703_3pl.jpg",
            title : 'Camiseta Nike Esportiva',
            desc : 'Camiseta Negra Nike', 
            price : 15.99,
            path : 'nikesport'
        },  

        {
            id: 6,
            img: "https://s3.images-iherb.com/msc/msc60449/l/48.jpg",
            title : 'MultiVitamínico',
            desc : 'Multivitamínico MuscleTech', 
            price : 24.99,
            path : 'multivitaminico',
            category : 'health'
        }, 

        
        {
            id: 7,
            img: "https://images.samsung.com/es/smartphones/galaxy-note20/buy/carousel/mobile/005-galaxynote20ultra-mysticbronze.jpg?imwidth=720",
            title : 'Samsung Note 20 Ultra',
            desc : 'Samsung Note 20 Ultra Golden Pink', 
            price : 749,
            path : 'SamsungNote20',
            category : 'phone'
        },

        {
            id: 8,
            img: "https://cdn.shopify.com/s/files/1/0543/6650/3099/products/silver-adjustable-crystal-snake-sterling-silver-ring-e-e-jewellery.jpg?v=1622635429",
            title : 'Silver Snake Ring',
            desc : 'Silver Ring', 
            price : 42.55,
            path : 'SnakeRing'

        },

        {
            id: 9,
            img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/3fc8bd3ba6294a13ba5da83500f40d24_9366/Buzo_Trifolio_Warm-Up_Crew_Gris_CY4573_01_laydown.jpg",
            title : 'Adidas Sweatshirt',
            desc : 'Gray Sweatshirt', 
            price : 24.95,
            path : 'Sweatshirt'

        },

        {
            id: 10,
            img: "https://www.backmarket.es/cdn-cgi/image/format=auto,quality=75,width=1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/None_f130a79e-2477-4328-a59a-459bc2a3065f-thumb.jpg",
            title : 'Xiaomi Mi Electric Scooter',
            desc : 'Xiaomi Mi Electric Scooter Pro 2', 
            price : 659,
            path : 'XiaomiScooter'
        },    
        

        
        {
            id: 11,
            img: "https://derelojes.net/wp-content/uploads/2019/10/RELOJES-DE-LUJO.png",
            title : 'Ulyssen Nardin Watch',
            desc : 'Navy Blue Ulyssen Nardin Watch', 
            price : 25412.87,
            path : 'Ulyssenwatch'

        },

        {
            id: 12,
            img: "https://image.made-in-china.com/202f0j10lrSGzsyKELkW/Modern-Luxury-Home-Fabric-Lounge-Living-Room-Furniture-Recliner-Sofa.jpg",
            title : 'Single Sofa',
            desc : 'Green Single Sofa', 
            price : 99,
            path : 'singlesofa'
        }, 

                
        {
            id: 13,
            img: "https://images.nike.com/is/image/DotCom/CU3504_005?$NIKE_PWP_GRAY$&wid=420&hei=420",
            title : 'Nike Shoes',
            desc : 'Black & White Nike Shoes', 
            price : 59.99,
            path : 'Nike'

        },

        {
            id: 14,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSWpRDUOOyl5osyQnK-5FATJoHXdPqVw7g5g&usqp=CAU",
            title : 'Nike Airforce 1',
            desc : 'White Nike Airforce 1', 
            price : 109.99,
            path : 'XiaomiScooter'
        },

        {
            id: 15,
            img: "https://www.backmarket.es/cdn-cgi/image/format=auto,quality=75,width=1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/product_images/199260_1c8201c7-bd8d-4fed-88da-e8394621c080-thumb.jpg",
            title : 'MacBook Air 2017',
            desc : 'Gray MacBook Air', 
            price : 899,
            path : 'MacBookAir'
        },


        {
            id: 16,
            img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQaW3-V_U-VrqK_FUE8hC5sFl7vzaxIiKjN0rEBzt5UD2U-O7lkXPDedWLzh1TwazyXTQgRMf6in-1jpWyxWaA1ETxss1mIwE98_8tsKpWYbg3_BHFjEsI0&usqp=CAE",
            title : 'Corta Césped',
            desc : 'Corta Césped Verde', 
            price : 659,
            path : 'Cortacesped'
        },  

        {
            id: 17,
            img: "https://www.backmarket.es/cdn-cgi/image/format=auto,quality=75,width=1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/None_16e6b506-fe2e-44c3-94c1-242306c9a062-thumb.jpg",
            title : 'Lenovo ThinkPad X250 12"',
            desc : 'White Iphone X', 
            price : 609.95,
            path : 'Lenovo'
        },

        
        {
            id: 18,
            img: "https://www.backmarket.es/cdn-cgi/image/format=auto,quality=75,width=1920/https://d1eh9yux7w8iql.cloudfront.net/product_images/product_images/290057_b4c7419d-aa1b-47dc-a956-4afbd61d7d1f-thumb.jpg",
            title : 'Iphone 11',
            desc : 'Black Iphone 11', 
            price : 749,
            path : 'Iphone11',
            category : 'phone'
        },

       
        {
            id: 19,
            img: "https://4.imimg.com/data4/QO/TH/MY-5966276/red-color-travelling-bag-500x500.jpg",
            title : 'Travelling Bag',
            desc : 'Red Travelling Bag', 
            price : 49.99,
            path : 'travelBag'
        }, 

        
        {
            id: 20,
            img: "https://cdn.manomano.com/paleta-wolfpack-plus-mango-de-goma-344-165x120mm-P-3379115-12966407_1.jpg",
            title : 'Paletin',
            desc : 'Paletin de metal', 
            price : 9.99,
            path : 'paletin'
        },


        {
            id: 21,
            img: "https://sc04.alicdn.com/kf/H19380325bf7640e895fc0f8ad0a9824f7.jpg",
            title : 'Baby Bath',
            desc : 'Baby Plastic Bath', 
            price : 31.99,
            path : 'babyBath'
        }, 


        {
            id: 22,
            img: "https://sc04.alicdn.com/kf/Hbb7b188778194af8a1ff173c55f37af7z.jpg",
            title : 'Baby Spoons',
            desc : 'Baby Plastic Spoons', 
            price : 31.99,
            path : 'babySpoons'
        },

                
        {
            id: 23,
            img: "https://sc04.alicdn.com/kf/H33343c2574d34006a9739f71933d4f49V.jpg",
            title : 'Wood Chair',
            desc : 'White Wood Chair', 
            price : 29.55,
            path : '/woodchair'
        }, 


        {
            id: 24,
            img: "https://www.ikea.com/es/es/images/products/lack-mesa-auxiliar-negro__22518_pe107397_s5.jpg?f=xxs",
            title : 'Mesa Negra',
            desc : 'Mesa Negra de cuatro patas', 
            price : 7,
            path : 'mesanegra'
        },


    ]

}

console.log(data)
export default data;