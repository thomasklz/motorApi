import { v2 as cloudinary } from 'cloudinary';

export const upload = async (file) => {

 // Configuration
    cloudinary.config({ 
        cloud_name: 'dmuzsxf4o', 
        api_key: '691214264364535', 
        api_secret: 'vjn9lNbQ_usCvYOssK3TCG8H6mY' // Click 'View API Keys' above to copy your API secret
    });

    // Upload an image
      const uploadResult = await cloudinary.uploader
      .upload(
             'https://media.licdn.com/dms/image/v2/C4E03AQEo2D51RgskYw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1660173807723?e=2147483647&v=beta&t=tz4QAYTaWxd_3N1BnVAg4-wKZjfd3vqNSDwx4i7HsJg', {
              public_id: 'Tomas12',
          }
      )
      .catch((error) => {
          console.log(error);
      });
   
   console.log(uploadResult);

   console.log(uploadResult);
    
   // Optimize delivery by resizing and applying auto-format and auto-quality
   const optimizeUrl = cloudinary.url('Tomas', {
       fetch_format: 'auto',
       quality: 'auto'
   });
   
   console.log(optimizeUrl);
   
   // Transform the image: auto-crop to square aspect_ratio
   const autoCropUrl = cloudinary.url('Tomas', {
       crop: 'auto',
       gravity: 'auto',
       width: 500,
       height: 500,
   });
   
   console.log(autoCropUrl); 

   return uploadResult;

}