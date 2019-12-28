module.exports = {
  plugins: [
    `gatsby-plugin-styled-jsx`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "People's Music Studio",
        short_name: "PMS",
        start_url: "/",
        background_color: "#000",
        theme_color: "#fff",
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-151460947-1",
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
        // // Enables Google Optimize using your container Id
        // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // // Enables Google Optimize Experiment ID
        // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
      },
    },
  ],
}
