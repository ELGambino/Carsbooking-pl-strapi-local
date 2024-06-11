const config = {
    locales: ['pl'],
    translations: {
        en: {
          'app.components.LeftMenu.navbrand.title': 'CarsBooking.pl',
          "Auth.form.welcome.title": "Welcome to Carsbooking.pl!",
        },
    },
  };
  
  const bootstrap = (app) => {
    console.log(app);
  };
  
  export default {
    config,
    bootstrap,
  }