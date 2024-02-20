type TextPanProps = {
  children: string
} & React.ComponentPropsWithoutRef<"div">

type NotShortTextProps = TextPanProps & { short?: false }
type ShortTextProps = TextPanProps & { short: true; expanded?: boolean }

const shortString = (string: string, length = 50) =>
  string.slice(0, length) + "…"

function TextPan(props: NotShortTextProps): JSX.Element
function TextPan(props: ShortTextProps): JSX.Element
function TextPan(
  props: TextPanProps & { short?: boolean; expanded?: boolean }
) {
  const { short, expanded, children, ...rest } = props
  const shouldTruncate = short && !expanded
  return (
    <div aria-expanded={!!expanded} {...rest}>
      {shouldTruncate ? shortString(children) : children}
    </div>
  )
}

export default TextPan
