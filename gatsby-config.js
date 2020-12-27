module.exports = {
  siteMetadata: {
    title: `Jude Tejada Portfolio`,
    description: `My Portfolio website built with Gatsby.`,
    author: `Jude`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass",
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options:{
        plugins:[
          `gatsby-remark-relative-images`,
          {
            resolve: `gatsby-remark-images`,
            options:{
              maxWidth: 750,
              linkImagesToOriginal: false

            }
          }
        ]
      }
    },
   
    
   {
     resolve: 'gatsby-source-filesystem',
     options:{
       name: 'src',
       path: `${__dirname}/src/`
     }
   },
   {
     resolve: 'gatsby-source-contentful',
     options:{
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
     }
   }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
