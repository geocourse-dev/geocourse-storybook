const Button = ({ children, variant, className, textClassName, ...props }) => {
  const defaultClassName = `py-2 px-4 rounded-lg active:scale-95 transition-transform transform ${
    className ?? ''
  }`

  switch (variant) {
    case 'primary':
      return (
        <button
          className={`bg-primary border-2 border-primary ${defaultClassName}`}
          {...props}
        >
          <p className="text-white font-bold">{children}</p>
        </button>
      )

    case 'secondary':
      return (
        <button className={`bg-white ${defaultClassName}`} {...props}>
          <p className="text-primary font-bold">{children}</p>
        </button>
      )

    case 'disable':
      return (
        <button
          className={`border-2 border-gray-400 ${defaultClassName}`}
          {...props}
        >
          <p className="text-gray-400 font-bold">{children}</p>
        </button>
      )

    default:
      return (
        <button className={defaultClassName} {...props}>
          <p className={textClassName}>{children}</p>
        </button>
      )
  }
}

export default Button
