using Markdig;
using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace IvanLitskevich.Helpers
{
    public static class CustomHtmlHelper
    {
        public static HtmlString BuildMarkdown(this IHtmlHelper html, string markdown)
        {
            var pipeline = new MarkdownPipelineBuilder()
                .UseAdvancedExtensions()
                .Build();
            return new HtmlString(Markdown.ToHtml(markdown, pipeline));
        }
    }
}
