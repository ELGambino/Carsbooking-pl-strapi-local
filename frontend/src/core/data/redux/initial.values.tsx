// import { DataService } from "../json/header"

import { Contactdata } from "../json/contactus_data";
import { Listinggriddata } from "../json/listinggrid_data";
import { Listingglistdata } from "../json/listinglist_data";
import { ourteamdata } from "../json/ourteam_data";
import { Pricingdata } from "../json/pricing_data";
import { testimonial } from "../json/testimonial_data";

import { UserWalletData } from "../json/userwallet_data";

const initialState = {
  //header_data: DataService,
  listing_grid: Listinggriddata,
  listing_list: Listingglistdata,
  pricingdata: Pricingdata,
  ourteamdata: ourteamdata,
  testimonialdata: testimonial,
  contactdata: Contactdata,
  userwallet_data:UserWalletData,
  
};

export default initialState;
