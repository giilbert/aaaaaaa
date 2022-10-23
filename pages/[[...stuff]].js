export default function Home() {
  return <p>If youre seeing this something went wrong</p>;
}

/** @type { import("next").GetServerSideProps } */
export const getServerSideProps = (ctx) => {
  return {
    redirect: {
      permanent: true,
      destination: "https://meetxl.vercel.app" + ctx.resolvedUrl,
    },
    props: {},
  };
};
