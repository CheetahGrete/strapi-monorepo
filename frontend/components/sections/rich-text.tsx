import Markdown from 'react-markdown'
import MarkdownRender from 'utils/MarkdownRender'
type RichTextProps = {
  data?: {
    content?: string
  }
}
const RichText: React.FC<RichTextProps> = ({ data }) => {
  return (
    <div className="container py-12 prose prose-lg selection:bg-primary-300 selection:text-primary-900">
      {/* <Markdown>{data.content}</Markdown> */}
      <MarkdownRender>{data.content}</MarkdownRender>
    </div>
  )
}
export default RichText
