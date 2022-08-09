import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
         {/* SavvyCall start here  */}
    {/* <script>
      window.SavvyCal =
        window.SavvyCal ||
        function () {
          (SavvyCal.q = SavvyCal.q || []).push(arguments);
        };
    </script>
    <script async src="https://embed.savvycal.com/v1/embed.js"></script>
    <script>
      SavvyCal("init", {
        widget: {
          enabled: true,
          backgroundColor: "#DF292D",
          link: "nathankrasney/14601a74",
          prompt: "Schedule 1x1 with Nathan",
        },
      });
    </script> */}
    {/* SavvyCall finish here  */}
      </body>
    </Html>
  );
}
