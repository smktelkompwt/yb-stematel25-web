const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button
      className="border-2 rounded-md border-slate-100 text-slate-100 px-8 py-2 md:text-xl"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
