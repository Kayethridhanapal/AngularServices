import { Injectable } from '@angular/core';
import {Product} from './product' 
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  public  getProducts() {   
    let products:Product[];   
    products=[  
      new Product( 'Canon EOS M50',1231,'https://rukminim2.flixcart.com/image/312/312/knyxqq80/dslr-camera/r/y/x/digital-camera-eos-m50-mark-ii-eos-m50-mark-ii-canon-original-imag2gzkexzqhyhu.jpeg?q=70','Camera',5700,' Locked when Shutter Button is Pressed Half Way or Customizable AE Lock Button'),  
      new Product( 'SanDisk Dual Drive Go 256 GB ',1232,'https://rukminim2.flixcart.com/image/612/612/kr2e3680/pendrive/type-a-to-type-c/u/u/6/dual-drive-goupto-150mb-s-sandisk-original-imag4xq6t2ayfnhy.jpeg?q=70','Pen Drive',1400,'USB 3.1|256 GB,Plastic-For Desktop Computer, Laptop, Mobile, Tablet'),  
      new Product( 'boAt Rockerz 450 Pro',1233,'https://rukminim2.flixcart.com/image/416/416/kvsfhjk0/headphone/a/7/k/-original-imag8mf8nexzpsv8.jpeg?q=70','Earphones',1800,'Type-c Charging | 40mm Drivers | 70 hours playtime (at 60% volume)') ,
      new Product( 'Mi 3i 20000 mAh Power Bank ',1234,'https://rukminim2.flixcart.com/image/612/612/kfcv6vk0/power-bank/r/f/5/power-bank-20000-plm18zm-mi-original-imafvtc7x9zgrzbz.jpeg?q=70','Powerbank',1500,'Recharging time- 6.9 hours (with 18 W charger and USB cable)') 
    ]   
    return products;                 
}
}
