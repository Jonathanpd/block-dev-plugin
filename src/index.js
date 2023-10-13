import { registerBlockType } from '@wordpress/blocks'
import { 
    RichText, useBlockProps, InspectorControls
} from "@wordpress/block-editor"
import { __ } from "@wordpress/i18n"
import { PanelBody } from '@wordpress/components'
import block from './block.json'
import './main.css'

registerBlockType(block.name, {
    edit({ attributes, setAttributes }) {
        const { content } = attributes
        const blockProps = useBlockProps()

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Colors', 'block-dev-plugin')}>
                        Dummy Content
                    </PanelBody>
                </InspectorControls>
                <div {...blockProps}>
                    <RichText
                        className="fancy-header"
                        tagName="h2"
                        placeholder={ __( 'Heading...', 'block-dev-plugin' ) }
                        value={ content }
                        onChange={newVal => setAttributes( { content: newVal } ) }
                        allowedFormats={[
                            'core/bold',
                            'core/italic'
                        ]}
                    />
                </div>
            </>
        )
    },
    save({ attributes }) {
        const { content } = attributes
        const blockProps = useBlockProps.save({
            className: 'fancy-header'
        })

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
console.log(blockProps)
id={blockProps.id}
role={blockProps.role}
 */

/*
<!-- wp:block-dev-plugin/fancy-header {"content":"Teste h2"} -->
<h2>Teste h2</h2>
<!-- /wp:block-dev-plugin/fancy-header -->
*/