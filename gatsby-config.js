module.exports = {
  pathPrefix: "/wedding_invitation",
  siteMetadata: {
    title: `Wedding Invitation`,
    siteUrl: `https://yeochan-ul.github.io/wedding_invitation/`
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@": "src", // Vue처럼 @를 src 폴더로 매핑
        },
        extensions: ["js", "jsx"], // 확장자 인식
      },
    },
  ],
};
