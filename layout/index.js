import Head from "next/head";

export default function layout({ children, metaTitle, metaDesc }) {
  return (
    <div>
      <Head>
        <title>Social Media - {metaTitle}</title>
        <meta name="description" content={metaDesc || "Generated by fzalv"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
}
