import { registerBlockType } from '@wordpress/blocks'
import { RichText, useBlockProps } from "@wordpress/block-editor"
import { __ } from "@wordpress/i18n"
import block from './block.json'

registerBlockType(block.name, {
    edit({ attributes, setAttributes }) {
        const { content } = attributes
        const blockProps = useBlockProps()

        return (
            <RichText
                {...blockProps}
                tagName="h2"
                placeholder={ __( 'Heading...', 'block-dev-plugin' ) }
                value={ content }
                onChange={newVal => setAttributes( { content: newVal } ) }
            />
        )
    },
    save({ attributes }) {
        const { content } = attributes
        const blockProps = useBlockProps.save()

        return (
            <RichText.Content
                {...blockProps}
                tagName="h2"
                value={ content }
            />
        )
    }
});

/* 
allowedFormats={ [ 'core/bold', 'core/italic' ] }
console.log(blockProps)
id={blockProps.id}
role={blockProps.role}
 */

/*
<!-- wp:block-dev-plugin/fancy-header {"content":"Teste h2"} -->
<h2>Teste h2</h2>
<!-- /wp:block-dev-plugin/fancy-header -->
*/