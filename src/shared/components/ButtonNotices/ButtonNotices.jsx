const Button = props => {
  const {
    onClick,
    label,
    className,
    type,
    SVGComponent,
    showLabelFirst = true,
  } = props;

  return (
    <button onClick={onClick} className={className} type={type}>
      {showLabelFirst && label}
      {SVGComponent && <SVGComponent />}
      {!showLabelFirst && label}
      {props.children}
    </button>
  );
};

export default Button;
