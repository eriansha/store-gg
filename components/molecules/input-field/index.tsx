interface inputFieldProps {
  label: string,
  type: 'text' | 'number' | 'email',
  placeholder: string,
}

export default function InputField({ label, type, ...props }: inputFieldProps) {
  return (
    <>
      <label htmlFor={ type } className="form-label text-lg fw-medium color-palette-1 mb-10">
        { label }
      </label>
      <input
        type={ type }
        className="form-control rounded-pill text-lg"
        id={ type }
        name={ type }
        aria-describedby={ type }
        { ...props }
      />
    </>
  )
}
