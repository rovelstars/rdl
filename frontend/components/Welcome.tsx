
export default function Welcome(props: { un: String }) {
  return (
    <h1 className="mt-96 mb-96 p-10 font-extrabold font-display tracking-wide text-3xl md:text-5xl text-black-text dark:text-white-text">
      {/*<Trans
        i18nKey="Welcome Back, <UserName name={props.un} />"
        values={{ un: props.un }}
        components={{ UserName: <UserName name={props.un} /> }}
      >*/}
        Welcome Back, <UserName name={props.un} />
      {/*</Trans>*/}
    </h1>
  );
  function UserName(props: { name: String }) {
    return (
      <span className="text-bg-lighter dark:text-warning">{props.name}</span>
    );
  }
}
