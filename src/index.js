import { registerBlockType } from '@wordpress/blocks'
import { RichText } from "@wordpress/block-editor"
import { __ } from "@wordpress/i18n"
import block from './block.json'

registerBlockType(block.name, {
    edit({ attributes, setAttributes }) {
        const { content } = attributes

        return (
            <RichText
                tagName="h2"
                placeholder={ __( 'Heading...', 'block-dev-plugin' ) }
                value={ content }
                onChange={newVal => setAttributes( { content: newVal } ) }
            />
        )
    },
    save({ attributes }) {
        const { content } = attributes

        return (
            <RichText.Content
                tagName="h2"
                value={ content }
            />
        )
    }
});

/* 
allowedFormats={ [ 'core/bold', 'core/italic' ] }
 */

/*
<!-- wp:block-dev-plugin/fancy-header {"content":"Teste h2"} -->
<h2>Teste h2</h2>
<!-- /wp:block-dev-plugin/fancy-header -->
*/