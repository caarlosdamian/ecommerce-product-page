interface Props {
  clickAction: () => void;
}
export const Overlay = ({ clickAction }: Props) => {
  return <section className="overlay" onClick={clickAction}></section>;
};
