import initialState from "./initial.values";

const rootReducer: number | string | boolean = (state = initialState, action: number | string | boolean) => {
  switch (action.type) {
    case "HEADER_DATA":
      return { ...state, header_data: action.payload };
    case "ListingsData":
      return { ...state, listing_grid: action.payload };
    case "Listings_List_Data":
      return { ...state, listing_list: action.payload };
    case "Pricing_Data":
      return { ...state, pricingdata: action.payload };
    case "Our_team_data":
      return { ...state, ourteamdata: action.payload };
    case "testimonial_data":
      return { ...state, testimonialdata: action.payload };
    case "contact_data":
      return { ...state, contactdata: action.payload };
    case "Userwallet_data":
      return { ...state, userwallet_data: action.payload };
      case "UserPayment_data":
      return { ...state, userpayment_data: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
