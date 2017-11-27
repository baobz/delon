const JsonML = require('jsonml.js/lib/utils');
import { isHeading, generateSluggedId } from '../utils/utils';

export function toc(markdownData: any, config: any) {
    const maxDepth = config.theme.tocMaxDepth || 6;
    const listItems = JsonML.getChildren(markdownData.content).filter((node: any) => {
        const tagName = JsonML.getTagName(node);
        return isHeading(tagName) && +tagName.charAt(1) <= maxDepth;
      }).map((node: any) => {
        const slugged = generateSluggedId(JsonML.getChildren(node));
        return {
            href: `#${slugged.id}`,
            title: slugged.text
        };
    });
    return listItems;
}
