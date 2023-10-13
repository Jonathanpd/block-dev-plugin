import { registerBlockType } from '@wordpress/blocks'
import block from './block.json'
import icons from '../../icons'

registerBlockType(block.name, {
    icon: icons.primary,
    edit() {
        return <p>Hello Form</p>
    }
})
